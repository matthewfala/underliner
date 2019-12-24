/*
 *  Line Sep API
 *  Provide: TextNode
 *  Returns: Array of Strings (line separated)
 *
*/

/*
	Notes:
	1) Span does not cause a space
	2) Span is inside of a pNode and controls underline type
	3) Use the following to get chrome extension file dir:
		chrome.extension.getURL("images/myimage.png");
		or CSS: 'chrome-extension://__MSG_@@extension_id__/images/main.png'

	Concerns:
	1) pNodes with <spans> may not line separate correctly. (Skip elems?)
		Fix: check if BasicTextNode (BTN)
		 	childNodes.length == 1
		 	& pNode.nodeType == 3 (textNode)

 */
// Map Closure: Nodes -> Text (Tested)
const GetDefaultText = (() =>
{
	let textMap = new WeakMap();
	return (parentNode) =>
	{
		// recover
		if (parentNode in textMap)
		{
			return textMap[parentNode];
		}

		let text = parentNode.childNodes[0].nodeValue;
		textMap[parentNode] = text;
		return text;
	}
})();

function TestScript()
{
	// OnLoad refresh
	EvaluateText();

	// Resize refresh
	window.addEventListener('resize', () => {
		EvaluateText();
	})
}

function EvaluateText()
{
	// Get test text node
	let textID = "test-text";
	let pNode = document.getElementById(textID);
	console.log(pNode);
	let tNode = pNode.childNodes[0];

	// break into an array
	console.log(tNode);

	let lineArray = SepaTextNode(tNode);
	OutputTestResult(lineArray);
}

// takes a node that contains a textNode and returns an array
// Valid options are p, a, h1, h2, h3
function SepaTextNode(textNode)
{
	//  Init node hooks
	let clone = document.createElement("span");
	let pNode = textNode.parentNode;
	let pCopy = pNode.cloneNode(true);
	let root = pNode.parentNode;

	//  Attach (Clone -> Parent)
	clone.appendChild(pCopy);

	//  Hide clone
	let classText = pNode.getAttribute("class");
	if (classText)
	{
		clone.setAttribute("class", classText + " clone");
	}
	else
	{
		clone.setAttribute("class", "clone");
	}

	let idText = pNode.getAttribute("id");
	if (idText)
	{
		clone.setAttribute("id", idText);
	}

	let styleText = pNode.getAttribute("style");
	if (styleText)
	{
		clone.setAttribute("style", styleText);
	}

	//  Append (Root -> Clone)
	root.appendChild(clone);

	//  Get lines
	let lines = GetLines(pCopy.childNodes[0]);

	// Remove clone
	root.removeChild(clone);

	return lines;
}

function GetLines(textNode)
{
	//  Get text
	let text = textNode.nodeValue;
	console.log(text);

	//  Wipe textNode
	textNode.nodeValue = "";
	let prevHeight = 0;

	//  Get lines
	let lines = [];
	let line = "";
	RunOncePerWord(text,
		(word, last) => {
			//  Append word
			textNode.nodeValue += word;

			//  Check height
			let curHeight = GetHeight(textNode);

			//  Save line
			if (prevHeight != curHeight)
			{
				// transfer line
				lines.push(line);
				line = "";
				prevHeight = curHeight;
			}

			//  Add word to line
			line += word;

			//  Handle last line
			if (last)
			{
				lines.push(line);
			}
		});

	//  Return result
	return lines;
}

function GetHeight(textNode)
{
	return textNode.parentNode.clientHeight;
}

function RunOncePerWord(text, callback)
{
	let state = 1;
	let wStart = 0;
	let wEnd = 0;
	let word = "";
	while (state != 4)
	{
		console.log("Word");
		let isWhite = /\s|\f|\n|\r|\t|\v|\u00A0|\u2028|\u2029/.test(text[wEnd]);
		switch (state)
		{
		//  Add whitespace
		case 1:
			//  Transition: chars
			if (!isWhite)
			{
				state = 2;
				console.log("1->2")
				break;
			}

			//  Transition: recover
			if (wEnd == text.length - 1) {
				state = 3;
				break;
			}

			//  Add: ws
			++wEnd;
			break;

		//  Add chars
		case 2:
			//  Transition: recover
			if (isWhite)
			{
				state = 3;
				console.log("2->3");
				break;
			}

			//  Transition: recover
			if (wEnd == text.length - 1)
			{
				state = 3;
				break;
			}

			//  Add: char
			++wEnd;
			break;

		//  Recover word
		case 3:
			//  Stats
			let last = (wEnd == text.length - 1);

			//  Callback
			let word = text.substring(wStart, wEnd);
			callback(word, last);
			console.log(word);

			//  Transitions
			wStart = wEnd;
			if (last)
			{
				state = 4;
			}
			else
			{
				state = 1;
				console.log("3 -> 1")
			}
			break;
		}
	}
}

function OutputTestResult(lineArray)
{
	let outputPane = document.getElementById("result");
	while (outputPane.hasChildNodes())
	{
		outputPane.removeChild(outputPane.lastChild);
	}
	for (line in lineArray)
	{
		//let textNode = document.createTextNode(line + ") " + lineArray[line]);
		let textNode = document.createTextNode(lineArray[line]);
		let pNode = document.createElement("p");
		pNode.appendChild(textNode);
		outputPane.appendChild(pNode);
	}
}