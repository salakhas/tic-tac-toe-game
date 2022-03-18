// Function called whenever user tab on any box
function checkFn() {

	// Setting DOM to all boxes or input field
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("box1").value;
	b2 = document.getElementById("box2").value;
	b3 = document.getElementById("box3").value;
	b4 = document.getElementById("box4").value;
	b5 = document.getElementById("box5").value;
	b6 = document.getElementById("box6").value;
	b7 = document.getElementById("box7").value;
	b8 = document.getElementById("box8").value;
	b9 = document.getElementById("box9").value;

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;

		alert('Player X won');
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("v1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		alert('Player X won');
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box9").disabled = true;
		alert('Player X won');
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		alert('Player X won');
	}

	
	// After completion of Player one's turn checking if Player 0 starts, 
    //Has player 0 won or
	// not and after that disabled all the other fields
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
		b4 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		alert('Player 0 won');
	}
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
		b8 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
		b6 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
		b5 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
		b5 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		alert('Player 0 won');
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
		b5 == '0') && (b8 == '0' || b8 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box9").disabled = true;
		alert('Player 0 won');
	}
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
		b5 == '0') && (b6 == '0' || b6 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		alert('Player 0 won');
	}

	// Checking of Player 0 finish
	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
			document.getElementById('print').innerHTML = "Match Tie";
			alert('Match Tie');
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print').innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print').innerHTML = "Player 0 Turn";
		}
	}
}

// Function to reset game
function reset() {
	location.reload();
	document.getElementById('box1').value = '';
	document.getElementById("box2").value = '';
	document.getElementById("box3").value = '';
	document.getElementById("box4").value = '';
	document.getElementById("box5").value = '';
	document.getElementById("box6").value = '';
	document.getElementById("box7").value = '';
	document.getElementById("box8").value = '';
	document.getElementById("box9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function alternate1() {
	if (flag == 1) {
		document.getElementById("box1").value = "X";
		document.getElementById("box1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box1").value = "0";
		document.getElementById("box1").disabled = true;
		flag = 1;
	}
}

function alternate2() {
	if (flag == 1) {
		document.getElementById("box2").value = "X";
		document.getElementById("box2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box2").value = "0";
		document.getElementById("box2").disabled = true;
		flag = 1;
	}
}

function alternate3() {
	if (flag == 1) {
		document.getElementById("box3").value = "X";
		document.getElementById("box3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box3").value = "0";
		document.getElementById("box3").disabled = true;
		flag = 1;
	}
}

function alternate4() {
	if (flag == 1) {
		document.getElementById("box4").value = "X";
		document.getElementById("box4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box4").value = "0";
		document.getElementById("box4").disabled = true;
		flag = 1;
	}
}

function alternate5() {
	if (flag == 1) {
		document.getElementById("box5").value = "X";
		document.getElementById("box5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box5").value = "0";
		document.getElementById("box5").disabled = true;
		flag = 1;
	}
}

function alternate6() {
	if (flag == 1) {
		document.getElementById("box6").value = "X";
		document.getElementById("box6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box6").value = "0";
		document.getElementById("box6").disabled = true;
		flag = 1;
	}
}

function alternate7() {
	if (flag == 1) {
		document.getElementById("box7").value = "X";
		document.getElementById("box7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box7").value = "0";
		document.getElementById("box7").disabled = true;
		flag = 1;
	}
}

function alternate8() {
	if (flag == 1) {
		document.getElementById("box8").value = "X";
		document.getElementById("box8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box8").value = "0";
		document.getElementById("box8").disabled = true;
		flag = 1;
	}
}

function alternate9() {
	if (flag == 1) {
		document.getElementById("box9").value = "X";
		document.getElementById("box9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box9").value = "0";
		document.getElementById("box9").disabled = true;
		flag = 1;
	}
}
