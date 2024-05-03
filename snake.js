//canvas variables
let canvas;
let context;

let lastDirection = "right";
let snakeDirection;

//TODO: create snake variables here that match the food variables (3)

//food variables
let foodPosX;
let foodPosY;

//time variables
let interval = 50;
let step;

//key bindings
let upKey = 119; //W
let downKey = 115; //A
let leftKey = 97; //S
let rightKey = 100; //D



function initial() {
	//set up canvas
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');

	//initialize food and snake objects
	newFood();

	//set interval
  	step = setInterval("draw()", interval);

	//initialize key press event listener
  	document.addEventListener("keypress", keyPress, false);
}

function draw() {
	//draw canvas
	//TODO: make a variable called backgroundColor that stores the color white (1)
	context.fillStyle = "white";
	context.fillRect(0, 0, canvas.width, canvas.height);

	//move snake
  	animateSnake();


	//draw food
	//TODO: make variables that store the food's color, height, and width (2)
	context.fillStyle = "red";
	context.fillRect(foodPosX, foodPosY, 10, 10);

	//draw score
	context.fillStyle = "black";
	context.fillText("Score: " + "0", canvas.width - 50, 20);
}


function animateSnake() {
	
}

function newFood() {
	
	foodPosX = 100; 
	foodPosY = 100;
}

function keyPress(evt) {
	

  if (evt.keyCode == upKey) {
      snakeDirection = "up";
  }
  else if (evt.keyCode == downKey) {
      snakeDirection = "down";
  }
  else if (evt.keyCode == leftKey) {
      snakeDirection = "left";
  }
  else if (evt.keyCode == rightKey) {
      snakeDirection = "right";
  }
}