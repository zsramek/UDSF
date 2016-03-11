#pragma strict

@script RequireComponent(ScriptReader)

public var man : GameObject;

@HideInInspector
public var scriptReader : ScriptReader;

function Awake()
{
	scriptReader = GetComponent.<ScriptReader>();
}

function Start () {

}

function Update () {

}

function FadeIn(character : String, expression : String);
{
	while (scriptReader.busy == true)
	{
		yield;
	}
	scriptReader.busy = true;
}

function FadeOut(character : String, expression : String);
{
	while (scriptReader.busy == true)
	{
		yield;
	}
	scriptReader.busy = true;
}

function Appear(character : String, expression : String);
{
	while (scriptReader.busy == true)
	{
		yield;
	}
	scriptReader.busy = true;
}

function Disappear(character : String, expression : String);
{
	while (scriptReader.busy == true)
	{
		yield;
	}
	scriptReader.busy = true;
}

function ChangeExpression(character : String, expression : String);
{
	while (scriptReader.busy == true)
	{
		yield;
	}
	scriptReader.busy = true;
}