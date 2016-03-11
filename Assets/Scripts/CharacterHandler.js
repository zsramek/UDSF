#pragma strict

import System.Collections.Generic;

@script RequireComponent(ScriptReader)

//Declare all characters here
public var man : GameObject;

@HideInInspector
public var scriptReader : ScriptReader;

private var characterDictionary = new Dictionary.<String, GameObject>();

function Awake()
{
	scriptReader = GetComponent.<ScriptReader>();
	PopulateDictionary();
}

function PopulateDictionary()
{
	//All characters must be added here according to their names
	characterDictionary["man"] = man;
}

function FadeIn(character : String, expression : String)
{
	while (scriptReader.busy == true)
	{
		yield;
	}
	scriptReader.busy = true;

	var charObj : GameObject = characterDictionary[character];
	if (charObj == null)
	{
		Debug.LogError("Character not found");
		return;
	}
	var currentChar : Character = charObj.GetComponent.<Character>();
	if (currentChar == null)
	{
		Debug.LogError("Specified object is missing the 'Character' script");
		return;
	}

	currentChar.SetExpression(expression);
	currentChar.FadeIn();

	scriptReader.busy = false;
}

function FadeOut(character : String, expression : String)
{
	while (scriptReader.busy == true)
	{
		yield;
	}
	scriptReader.busy = true;

	var charObj : GameObject = characterDictionary[character];
	if (charObj == null)
	{
		Debug.LogError("Character not found");
		return;
	}
	var currentChar : Character = charObj.GetComponent.<Character>();
	if (currentChar == null)
	{
		Debug.LogError("Specified object is missing the 'Character' script");
		return;
	}
}

function Appear(character : String, expression : String)
{
	while (scriptReader.busy == true)
	{
		yield;
	}
	scriptReader.busy = true;

	var charObj : GameObject = characterDictionary[character];
	if (charObj == null)
	{
		Debug.LogError("Character not found");
		return;
	}
	var currentChar : Character = charObj.GetComponent.<Character>();
	if (currentChar == null)
	{
		Debug.LogError("Specified object is missing the 'Character' script");
		return;
	}
}

function Disappear(character : String, expression : String)
{
	while (scriptReader.busy == true)
	{
		yield;
	}
	scriptReader.busy = true;

	var charObj : GameObject = characterDictionary[character];
	if (charObj == null)
	{
		Debug.LogError("Character not found");
		return;
	}
	var currentChar : Character = charObj.GetComponent.<Character>();
	if (currentChar == null)
	{
		Debug.LogError("Specified object is missing the 'Character' script");
		return;
	}
}

function ChangeExpression(character : String, expression : String)
{
	while (scriptReader.busy == true)
	{
		yield;
	}
	scriptReader.busy = true;

	var charObj : GameObject = characterDictionary[character];
	if (charObj == null)
	{
		Debug.LogError("Character not found");
		return;
	}
	var currentChar : Character = charObj.GetComponent.<Character>();
	if (currentChar == null)
	{
		Debug.LogError("Specified object is missing the 'Character' script");
		return;
	}
}