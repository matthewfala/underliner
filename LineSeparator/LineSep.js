/*
 *  Line Sep API
 *  Provide: TextNode
 *  Returns: Array of Strings (line separated)
 *
*/

// Test ground
//document.getElementsByTagName("body")[0].addEventListener("onload", TestScript);

function TestScript()
{
	OutputTestResult(["A", "TextB"]);
}

function SepaTextNode(textNode)
{
	
}

function OutputTestResult(lineArray)
{
	let outputPane = document.getElementById("result");
	for (line in lineArray)
	{
		let textNode = document.createTextNode(line + ") " + lineArray[line]);
		let pNode = document.createElement("p");
		pNode.appendChild(textNode);
		outputPane.appendChild(pNode);
	}
}