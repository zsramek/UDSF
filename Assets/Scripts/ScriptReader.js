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
			if (currentLine[0] == '@')
			{
				//It's a directive
				HandleDirective(currentLine);
			}
			else
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
		else
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
	if (directive == "@clear")
	{
		printer.Clear();
	}
	else
	{
		//Parse a multipart directive
		var instr : String = "";
		var para1 : String = "";
		var para2 : String = '';
		var i : int = 1;
		while (directive[i] != ':')
		{
			instr  = instr + directive[i];
			i++;
		}
		i++;
		while (directive[i] != ',')
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

		Debug.Log(instr);
		Debug.Log(para1);
		Debug.Log(para2);
	}
}