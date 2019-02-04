function getScrollTop() {
  return window.pageYOffset ||  (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

function getTodayDate() {
	var fullDate = new Date();
	let year = fullDate.getFullYear();
	const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
	let monthIndex = fullDate.getMonth()
	let monthString = month[monthIndex];
	let date = fullDate.getDate();

	var dateMessage;
	if (monthIndex == 3 && date == 9) {
		dateMessage = "<text style='color:white;'> <b> Happy Birthday to Myself! </b> </text>";
	} else {
		dateMessage = `<text style='color:white;'> <b> ${monthString} ${date}, ${year} </b> </text>`;
	}

	document.getElementById("todaydate").innerHTML = dateMessage;
	return;
}


function surprise() {
	var popUpSurprise = function() {
		var popUpImg = document.createElement("IMG");
		popUpImg.setAttribute("id", "popUp");
		popUpImg.setAttribute("src", "thumbsup.gif");
		popUpImg.setAttribute("alt", "Thumbs Up Surprise");
		popUpImg.style.position = "absolute";
		popUpImg.style.top = "100px";
		popUpImg.style.left = "25%";
		popUpImg.style.zIndex = "99"; // TODO: create a file with list of z-index 
		document.body.insertBefore(popUpImg, document.body.firstChild);
	};
	popUpSurprise();

	setTimeout(function() {
		var popUpImg = document.getElementById("popUp");
		document.body.removeChild(popUpImg);
		alert("Coming soon!");
	}, 3000);
	return false;
}

function monthDiff(d1, d2) {
    var months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

function getChildIndex(element) {
	var index = 0;
	while ((element = element.previousSibling) != null) {
		index++
	}

	return index;
}

function showTagDetails(listElement, index, expSince="unknown", profLevel="unknown", ...projects) {
	var spanElement = listElement.getElementsByTagName("span")[0];
	spanElement.style.visibility = "visible";
	spanElement.style.left = 10 + index * 125 + "px";

	var expTimeFormat = expSince;
	// convert the experience time to a suitable format when displayed
	if (expSince instanceof Date) {
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

	spanElement.innerHTML = 
	`
	<b>Experience</b>: ${expTimeFormat} 
	<br>
	<b>Proficiency</b>: ${profLevel} / 10
	<br>
	<b>Relevant Projects</b>: <br>
	`;

	for (var i = 0; i < Array.from(projects).length; i++) {
		spanElement.innerHTML += `&nbsp; &nbsp; &#x25CF; ${projects[i]} <br>`;
	}

	return;
}


function hideTagDetails(listElement) {
	var spanElement = listElement.getElementsByTagName("span")[0];
	spanElement.style.visibility = "hidden";
	return;
}