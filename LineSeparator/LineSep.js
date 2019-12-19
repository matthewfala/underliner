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
	// test clone height
	//let clone = document.getElementsByClassName("clone")[0];
	let content = document.getElementById("clone-content"); //clone.children[0];
	//let content = clone.children[0];
	console.log("Clone Height: " + content.clientHeight);
	console.log("Clone Width: " + content.clientWidth);


	// Get test text node
	let textID = "test-text";
	let pNode = document.getElementById(textID);
	let tNode = pNode.children[0];

	// break into an array
	let lineArray = SepaTextNode(tNode);
	OutputTestResult(["A", "TextB"]);
}

// takes a textNode and returns an array
function SepaTextNode(textNode)
{
	/*let textNode = document.createTextNode(line + ") " + lineArray[line]);
		let pNode = document.createElement("p");
		pNode.style = "display: inline-block";
		pNode.appendChild(textNode);
		outputPane.appendChild(pNode);
		console.log(line + ") " + pNode.clientWidth);


*/
	



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