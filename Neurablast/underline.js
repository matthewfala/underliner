
//alert("Underline.js Activated");
//console.log("Underline.js Activated");

// var myElement = document.getElementById("intro");
// var x = document.getElementsByTagName("p");
// var x = document.getElementsByClassName("intro");
// var x = document.querySelectorAll("p.intro");

import textTags from "textTags.js";

setTimeout(

	textTags.forEach((tag) => {

		// Get the class
		let es = document.getElementsByTagName(tag.name);
		
		// Handle elements
		es.forEach((e) => {
			let classes = e.getAttribute("class").trim();
			if (classes.endsWith(";"))
			{
				classes.substr(0, classes.length-1);
			}
			classes += ", ";

			// Add attribute
			classes += tag.class;
			e.setAttribute("class", classes);
			});

		}),
	
		
	}, 1000);

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


/*
Underline tech

a {
  color: #000;
  text-decoration: none;
}

.underline {
  background-repeat: repeat-x;
}

.underline--stars {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/78779/star.svg");
  background-position: 0 1.06em;
  background-size: 10px 9px;
  color: #f2f3f8;
}

.underline--emoji {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/78779/heart.png");
  background-position: 0 1.06em;
  background-size: 15px 9px;
  color: #e8665f;
}

.underline--bacon {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/78779/bacon.svg");
  background-position: 0 1.06em;
  background-size: 28px 9px;
  color: #9e4446;
}

// ----- Unrelated ----- //

html {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: 1;
}

p {
  margin: 0;
}

.cell {
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
}

.container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  
  > * {
    display: flex;
    flex-basis: percentage(1 / 3);
    align-items: center;
    align-content: center;
  }
}

.row {
  padding: 40px;
}

.row--bacon {
  background-color: #feeee5;
}

.row--emoji {
  background-color: #9c2b38;
}

.row--stars {
  background-color: #0d0921;
}*/


/*

<p class="cell">
    <span class="underline underline--bacon">Baconderline</span>
</p>

*/