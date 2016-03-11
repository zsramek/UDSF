#pragma strict

import System.Collections.Generic;

@script RequireComponent(ScriptReader)

public var characterFadeTime : float;

//Declare all characters here
public var man : GameObject;

private var scriptReader : ScriptReader;
private var characterDictionary = new Dictionary.<String, GameObject>();

function Awake()
{
	scriptReader = GetComponent.<ScriptReader>();
	PopulateDictionary();

	//Set fade time for all characters
	for (var key in characterDictionary.Keys)
	{
		characterDictionary[key].GetComponent.<Character>().fadeTime = characterFadeTime;
	}
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

function FadeOut(character : String)
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

	currentChar.FadeOut();

	scriptReader.busy = false;
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

	currentChar.SetExpression(expression);
	currentChar.Appear();

	scriptReader.busy = false;
}

function Disappear(character : String)
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

	currentChar.Disappear();

	scriptReader.busy = false;
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

	currentChar.SetExpression(expression);

	scriptReader.busy = false;
}