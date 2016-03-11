#pragma strict

@script RequireComponent(ScriptReader)

public var textBox : UI.Text;

@Range (1.0, 10.0)
public var textSpeed : int = 10;

//private var printing : boolean = false;
private var scriptReader : ScriptReader;

function Awake()
{
	scriptReader = GetComponent.<ScriptReader>();
	Print("\0");
}

function Print(str : String)
{
	while (scriptReader.busy == true)
	{
		yield;
	}
	scriptReader.busy = true;
	textBox.text = '';
	var p = 0;
	var skip : boolean = false;
	while (p < str.length)
	{
		if (Input.GetMouseButtonDown(1))
		{
			textBox.text = str;
			break;
		}
		textBox.text = textBox.text + str[p];
		p++;
		for (var s = 0; s < (11 - textSpeed); s++)
		{
			yield;
		}
	}
	while(true)
	{
		if (Input.GetKeyDown(KeyCode.Return) || Input.GetMouseButtonDown(0))
		{
			break;
		}
		yield;
	}
	scriptReader.busy = false;
}

function Clear()
{
	while (scriptReader.busy == true)
	{
		yield;
	}
	textBox.text = " ";
}