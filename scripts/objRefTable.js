const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Browser,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.System.Cnds.PickByEvaluate,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.ScriptsInEvents.Gameevents_Event8_Act1,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Cnds.EvaluateExpression,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Sprite.Exps.AnimationName,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.ScriptsInEvents.Gameevents_Event12_Act2,
		C3.Plugins.System.Exps.random,
		C3.ScriptsInEvents.Gameevents_Event14_Act4,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Browser.Acts.Reload,
		C3.Plugins.System.Cnds.Else,
		C3.ScriptsInEvents.Gameevents_Event22_Act2,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.ScriptsInEvents.Gameevents_Event24_Act2
	];
};
self.C3_JsPropNameTable = [
	{Background: 0},
	{xPos: 0},
	{yPos: 0},
	{Space: 0},
	{Mouse: 0},
	{Eraser: 0},
	{drawingNumber: 0},
	{BoardDrawing: 0},
	{menu_button: 0},
	{retry_button: 0},
	{window: 0},
	{SCORE: 0},
	{Text: 0},
	{Touch: 0},
	{Browser: 0},
	{Audio: 0},
	{currentPlayer: 0},
	{humanPlayer: 0},
	{gameState: 0},
	{doneDrawingBoard: 0},
	{currentlyDrawing: 0},
	{winner0: 0},
	{winner1: 0},
	{winner2: 0},
	{randomPlaceX: 0},
	{randomPlaceY: 0},
	{aiX: 0},
	{aiY: 0},
	{finishingTurn: 0}
];

self.InstanceType = {
	Background: class extends self.ISpriteInstance {},
	Space: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Eraser: class extends self.ISpriteInstance {},
	BoardDrawing: class extends self.ISpriteInstance {},
	menu_button: class extends self.ISpriteInstance {},
	retry_button: class extends self.ISpriteInstance {},
	window: class extends self.ISpriteInstance {},
	SCORE: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Audio: class extends self.IInstance {}
}