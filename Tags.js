
function showTagDetailsLess(listElement, index, ...myKnowledge) {
	var spanElement = listElement.getElementsByTagName("span")[0];
	spanElement.style.visibility = "visible";
	spanElement.style.left = 10 + index * 125 + "px";

	for (var text of Array.from(myKnowledge)) {
		spanElement.innerHTML += `&nbsp; &nbsp; &#x25CF; ${text} <br>`;
	}

	return;
}

function showTagDetails(listElement, index, expSince="unknown", profLevel="unknown", ...projects) {
	var spanElement = listElement.getElementsByTagName("span")[0];
	spanElement.style.visibility = "visible";
	spanElement.style.left = 10 + index * 125 + "px"; // TODO change the element's left offset relative to the user's window to reflect the element's position 

	var expTimeFormat = expSince;
	if (expSince instanceof Date) { 	// convert the text detailing the experience time to a suitable format when displayed
		var today = new Date();
		var monthsDiff = monthDiff(expSince, today);
		if (monthsDiff < 12) {
			expTimeFormat = `${monthsDiff} months`;
		} else if (monthsDiff % 12 == 0) {
			expTimeFormat = `${Math.floor(monthsDiff / 12)} years`; 
		} else {
			expTimeFormat = `${Math.floor(monthsDiff / 12)} years and ${monthsDiff % 12} months`; 
		}
	} 

	var SQLDetails = "<br>";
	if (listElement.innerHTML.match(new RegExp(".*SQL.*"))) {
		SQLDetails = "<br> <b>Variations</b>: mySQL, Oracle SQL, PostgreSQL <br> "  
	} 

	spanElement.innerHTML = 
	`
	<b>Experience</b>: ${expTimeFormat} 
	<br>
	<b>Comfortability</b>: ${profLevel} / 10
	${SQLDetails}
	<b>Relevant Projects</b>: <br>
	`;

	for (var project of Array.from(projects)) {
		spanElement.innerHTML += `&nbsp; &nbsp; &#x25CF; ${project} <br>`;
	}

	return;
}


function hideTagDetails(listElement) {
	var spanElement = listElement.getElementsByTagName("span")[0];
	spanElement.style.visibility = "hidden";
	return;
}