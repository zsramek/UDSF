#pragma strict

private var scriptReader : ScriptReader;

function Start()
{
	scriptReader = GetComponent.<ScriptReader>();
	Apples();
}

function Apples()
{
	scriptReader.OpenScript("C:/Users/visionexp/Documents/Unity Projects/GUITest/Assets/Story/Apples.txt");
	scriptReader.ReadScript();
	scriptReader.CloseScript();
}