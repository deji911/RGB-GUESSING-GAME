var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i]
	//add click listener to square
	squares[i].addEventListener("click", function(){
		/*alert("you have clicked a square");*/
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			changeColor(clickedColor);
			messageDisplay.textContent = "CORRECT!!!";
			h1.style.background = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "TRY AGAIN!!!";
		}

	})

}
function changeColor(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++){

		//change each color to given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() *colors.length);
	return colors[random];
	}

	function generateRandomColor(num){
//make an array
var arr = [];
//repeat num times
for(var i = 0; i < num; i++){
	//get random color and push into arr
	arr.push(randomColor())
	

}

//add num random color to arr
//return arr
return arr;
	}
	function randomColor(){
		//pick a red from 0-255
		var r = Math.floor(Math.random() * 256);
		//pick a green from 0-255
		var g = Math.floor(Math.random() * 256);
		//pick a blue from 0-255
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + "," + g + "," + b +")";

	} 