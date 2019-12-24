
//alert("Underline.js Activated");
//console.log("Underline.js Activated");

// var myElement = document.getElementById("intro");
// var x = document.getElementsByTagName("p");
// var x = document.getElementsByClassName("intro");
// var x = document.querySelectorAll("p.intro");

//import textTags from "textTags.js";
/*
let xhttp = new XMLHttpRequest();
xhttp.open("GET", "textTags.json", true);
xhttp.send();

let textTagsJSON = xhttp.responseText;
alert(textTagsJSON);
*/

let delayTime = 1000;

setTimeout(() => {
	textTags.forEach((tag) => {

		console.log("Tag: " + tag.name);

		// Get the class
		let es = document.getElementsByTagName(tag.name);
		
		let myEl = node;

		// Handle elements
		for (let i = 0; i < es.length; ++i) {
			let e = es[i];

			// separate text
			let text = e.innerHTML;
			e.removeChild(e.children[0]);
			e.addChild();// "<span class= \"underline underline--stars\"> </span>";
			
			//e.children[0].innerHTML = text;


			// pad with span
			//e.innerHTML = "<span class= \"underline underline--stars\"> " + text + "</span>";
		}
		});
	}, delayTime);

 

/*
chrome.runtime.onMessage.addListener(
alert("Underline.js Activated");

	function(message, callback) {
		if (message == "changeColor"){
    		chrome.tabs.executeScript({
      		code: 'document.body.style.backgroundColor="orange"'
    });
  }
});*/

