#pragma strict

import System.IO;

@script RequireComponent(Printer)
@script RequireComponent(CharacterHandler)

@HideInInspector
public var busy : boolean = false;

@HideInInspector
public var printer : Printer;
@HideInInspector
public var characterHandler : CharacterHandler;

@HideInInspector
public var scriptOpen : boolean = false;
@HideInInspector
public var currentLine : String;

private var sr : StreamReader; 

function Awake()
{
	printer = GetComponent.<Printer>();
	characterHandler = GetComponent.<CharacterHandler>();
}

function OpenScript(scriptPath : String)
{
	sr = new File.OpenText(scriptPath);
	if (sr)
	{
		scriptOpen = true;
	}
	else
	{
		Debug.LogError("Failed to open script file");
	}
}

function CloseScript()
{
	if (sr)
	{
		sr.Close();
		scriptOpen = false;
	}
}

function ReadScript()
{
	//Read the whole thing
	if (sr)
	{
		while (true)
		{
			currentLine = sr.ReadLine();
			if (currentLine == null)
			{
				break;
			}
			if (currentLine != "" && currentLine[0] == '@')
			{
				//It's a directive
				HandleDirective(currentLine);
			}
			else if (currentLine != "" && currentLine[0] != '#')
			{
				printer.Print(currentLine);
			}
		}
	}
	else
	{
		Debug.LogError("No script file open");
	}
}

function ReadLine()
{
	if (sr)
	{
		currentLine = sr.ReadLine();
		if (currentLine[0] == '@')
		{
			//It's a directive
			HandleDirective(currentLine);
		}
		else if (currentLine != "" && currentLine[0] != '#')
		{
			printer.Print(currentLine);
		}
	}
	else
	{
		Debug.LogError("No script file open");
	}
}

function HandleDirective(directive : String)
{
	//Parse a multipart directive
	var instr : String = "";
	var para1 : String = "";
	var para2 : String = '';
	var i : int = 1;
	while (i < directive.length && directive[i] != ':')
	{
		instr  = instr + directive[i];
		i++;
	}
	i++;
	while (i < directive.length && directive[i] != ',')
	{
		para1 = para1 + directive[i];
		i++;
	}
	i++;
	while (i < directive.length)
	{
		para2 = para2 + directive[i];
		i++;
	}

	if (instr == "clear")
	{
		printer.Clear();
	}
	else if (instr == "fadein")
	{
		characterHandler.FadeIn(para1, para2);
	}
}