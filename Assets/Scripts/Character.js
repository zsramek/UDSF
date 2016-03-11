#pragma strict

import System.Collections.Generic;

@script RequireComponent(SpriteRenderer);

@HideInInspector
public var fadeSpeed : float;

//Declare all expressions here (each is a sprite)
public var neutral : Sprite;
public var happy : Sprite;
public var sad : Sprite;
public var concerned : Sprite;
public var embarrassed : Sprite;
public var shy : Sprite;
public var scared : Sprite;
public var disgusted : Sprite;
public var bashful : Sprite;
public var loving : Sprite;

private var spriteRenderer : SpriteRenderer;
private var expressionDictionary = new Dictionary.<String, Sprite>();

function Awake()
{
	spriteRenderer = GetComponent.<SpriteRenderer>();
}

function Start()
{
	//Populate the expressionDictionary
	expressionDictionary["neutral"] = neutral;
	expressionDictionary["happy"] = happy;
	expressionDictionary["sad"] = sad;
	expressionDictionary["concerned"] = concerned;
	expressionDictionary["embarrassed"] = embarrassed;
	expressionDictionary["shy"] = shy;
	expressionDictionary["scared"] = scared;
	expressionDictionary["disgusted"] = disgusted;
	expressionDictionary["bashful"] = bashful;
	expressionDictionary["loving"] = loving;

	//Default to neutral
	spriteRenderer.sprite = neutral;
}

function SetExpression(expression : String)
{
	var i  : float = 0.0;
	while (spriteRenderer.color.a > 0)
	{
		spriteRenderer.color.a = Mathf.Lerp(255.0, 0.0, i);
		i += fadeSpeed;
		yield;
	}
	spriteRenderer.sprite = expressionDictionary[expression];
	i = 0.0;
	while (spriteRenderer.color.a < 255)
	{
		spriteRenderer.color.a = Mathf.Lerp(0.0, 255.0, i);
		i += fadeSpeed;
		yield;
	}
}

function FadeIn()
{
	var i  : float = 0.0;
	while (spriteRenderer.color.a < 255)
	{
		spriteRenderer.color.a = Mathf.Lerp(0.0, 255.0, i);
		i += fadeSpeed;
		yield;
	}
}

function FadeOut()
{
	var i  : float = 0.0;
	while (spriteRenderer.color.a > 0)
	{
		spriteRenderer.color.a = Mathf.Lerp(255.0, 0.0, i);
		i += fadeSpeed;
		yield;
	}
}

function Appear()
{
	spriteRenderer.color.a = 255.0;
}

function Disappear()
{
	spriteRenderer.color.a = 0.0;
}