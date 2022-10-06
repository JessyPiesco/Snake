const mainSnake = document.getElementById("mainSnake");
let rows = document.getElementsByClassName("gridRow");
let cell = document.getElementsByClassName("cell");

let snake = ["10,16", "10,17"];
let snakeNum = snake[0].split(",");
let xCord = Number(snakeNum[0]);
let yCord = Number(snakeNum[1]);
let yAx = [xCord, yCord];

let apple = ["10,12"];
let appleNum = apple[0].split(",");
let xaCord = Number(appleNum[0]);
let yaCord = Number(appleNum[1]);
let appleXY = [xaCord, yaCord];

let inny;

// making the board line 12-35
function makeBoard() {
  makeRow(30);
  makeColum(30);
}
function makeRow(num) {
  for (let i = 0; i < num; i++) {
    let row = document.createElement("div");
    mainSnake.appendChild(row).className = "gridRow";
  }
}

function makeColum(num) {
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < num; j++) {
      let cellBlock = document.createElement("div");
      cellBlock.setAttribute("id", `${j},${i}`);

      rows[j].appendChild(cellBlock).className = "cell";
    }
  }
}
makeBoard();

function snakeRender() {
  for (let i = 0; i < snake.length; i++) {
    console.log(document.getElementById(snake[i]), "note")

    document.getElementById(snake[i]).classList.add("snake");
    //
  }
}
snakeRender();

function unTogg() {
  document.getElementById(snake[snake.length - 1]).classList.remove("snake");
}

function appleRender() {
  document.getElementById(apple[0]).classList.toggle("apple");
}
appleRender();

function reApple() {
  document.getElementById(apple[apple.length - 1]).classList.toggle("apple");
  xaCord = Math.floor(Math.random() * 29);
  yaCord = Math.floor(Math.random() * 29);
  apple = [`${xaCord},${yaCord}`];
  appleXY = [xaCord, yaCord];

  // apple.shift();
  // apple.push(appleCords);
  console.log(apple);
  appleRender();
}

document.body.addEventListener("keydown", moveSnake);

function direction(move) {
  if (move === "down") {
    yAx[0] = yAx[0] + 1;
  }
  if (move === "up") {
    yAx[0] = yAx[0] - 1;
  }
  if (move === "left") {
    yAx[1] = yAx[1] - 1;
  }
  if (move === "right") {
    yAx[1] = yAx[1] + 1;
  }
  let updateCords = yAx.join(",");
  console.log(snake, "snakky");
  snake.unshift(updateCords);
  console.log(snake, "snakkky2");
  unTogg();
  snake.pop();
  snakeRender();
  console.log(snake, "snakky3");
  eatApple();
}

function moveSnake(event) {
  //down
  if (event.keyCode === 40) {
    clearInterval(inny);
    inny = setInterval(() => {
      direction("down");
    }, 500);
    //inny()
  }
  //up
  if (event.keyCode === 38) {
    clearInterval(inny);
    inny = setInterval(() => {
      direction("up");
    }, 500);
    //inny()
  }
  //left
  if (event.keyCode === 37) {
    clearInterval(inny);
    inny = setInterval(() => {
      direction("left");
    }, 500);
    //inny()
  }
  //right
  if (event.keyCode === 39) {
    clearInterval(inny);
    inny = setInterval(() => {
      direction("right");
    }, 500);
    //inny()
  }
}

function eatApple() {
  if (yAx[0] == appleXY[0] && yAx[1] == appleXY[1]) {
    reApple();
  }
}

moveSnake();

// const board = [
// [[0,0],[0,1],[0,2]],
// [[1,0],[1,1],[1,2]],
// [[2,0],[2,1],[2,2]],
// ]

// id each cell, should be cords, cords will need and x and y with a counter, in the function you'll make a new div with the class of cell, with an id (x,y)
