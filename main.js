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
		dateMessage = "<text style='color:white;'> <b>" + monthString + " " + date + ", " + year + "</b> </text>";
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
	}, 1000);
	return false;
}