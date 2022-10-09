const mainSnake = document.getElementById("mainSnake");
let rows = document.getElementsByClassName("gridRow");
let cell = document.getElementsByClassName("cell");
let score = document.getElementById("score");

let snake = ["10,16"];
let snakeNum = snake[0].split(",");
let xCord = Number(snakeNum[0]);
let yCord = Number(snakeNum[1]);
let yAx = [xCord, yCord];

let apple = ["10,12"];
let appleNum = apple[0].split(",");
let xaCord = Number(appleNum[0]);
let yaCord = Number(appleNum[1]);
let appleXY = [xaCord, yaCord];

let plum = ["1,12"];
let plumNum = plum[0].split(",");
let xpCord = Number(plumNum[0]);
let ypCord = Number(plumNum[1]);
let plumXY = [xpCord, ypCord];

let banana = ["10,1"];
let bananaNum = banana[0].split(",");
let xbCord = Number(bananaNum[0]);
let ybCord = Number(bananaNum[1]);
let bananaXY = [xbCord, ybCord];

let inny;
let directions = "nothing";
let food = 0;
let speed= 150

// making the board line 35-57
function makeBoard() {
  makeRow(25);
  makeColum(25);
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

//Snake element
function snakeRender() {
for (let i = 0; i < snake.length; i++) {
    document.getElementById(snake[i]).classList.add("snake");
  }
  }

snakeRender();

function unTogg() {
  document.getElementById(snake[snake.length - 1]).classList.remove("snake");
}

//fruit Elements 72-111
function appleRender() {
  document.getElementById(apple[0]).classList.add("apple");
  }
function plumRender(){
  document.getElementById(plum[0]).classList.add("plum");
}
function bananaRender()
{document.getElementById(banana[0]).classList.add("banana");}

reApple()
rePlum()
reBanana()


function reApple() {
  document.getElementById(apple[apple.length - 1]).classList.remove("apple");
  xaCord = Math.floor(Math.random() * 24);
  yaCord = Math.floor(Math.random() * 24);
  apple = [`${xaCord},${yaCord}`];
  appleXY = [xaCord, yaCord];
  appleRender();
}
function rePlum() {
  document.getElementById(plum[plum.length - 1]).classList.remove("plum");
  xpCord = Math.floor(Math.random() * 24);
  ypCord = Math.floor(Math.random() * 24);
  plum = [`${xpCord},${ypCord}`];
  plumXY = [xpCord, ypCord];
  plumRender();
}
function reBanana() {
  document.getElementById(banana[banana.length - 1]).classList.remove("banana");
  xbCord = Math.floor(Math.random() * 24);
  ybCord = Math.floor(Math.random() * 24);
  banana = [`${xbCord},${ybCord}`];
  bananaXY = [xbCord, ybCord];
  bananaRender();
}


document.body.addEventListener("keydown", moveSnake);

function direction(move) {
  if (move === "down") {
    yAx[0] = yAx[0] + 1;
    directions = "down";
  }
  if (move === "up") {
    yAx[0] = yAx[0] - 1;
    directions = "up";
  }
  if (move === "left") {
    yAx[1] = yAx[1] - 1;
    directions = "left";
  }
  if (move === "right") {
    yAx[1] = yAx[1] + 1;
    directions = "right";
  }
  let updateCords = yAx.join(",");
  snake.unshift(updateCords);
  unTogg();
  snake.pop();
gameOver();
snakeRender();

  eatApple();
  eatBanana();
  eatPlum();

  console.log(snake, "snake arr");

}

alert("Directions: Welcome to Snake, use your arrow pad to make your snake move, apples make you grow! Plums speed you up and banana's will slow you down. Only apples count toward your score. Good luck!")

function moveSnake(event) {
  //down
  if (event.keyCode === 40 && directions !== "up") {
    clearInterval(inny);
    inny = setInterval(() => {
      direction("down");
    }, speed);
    //inny()
  }
  //up
  if (event.keyCode === 38 && directions !== "down") {
    clearInterval(inny);
    inny = setInterval(() => {
      direction("up");
    }, speed);
    //inny()
  }
  //left
  if (event.keyCode === 37 && directions !== "right") {
    clearInterval(inny);
    inny = setInterval(() => {
      direction("left");
    }, speed);
    //inny()
  }
  //right
  if (event.keyCode === 39 && directions !== "left") {
    clearInterval(inny);
    inny = setInterval(() => {
      direction("right");
    }, speed);
    //inny()
  }
}

function eatApple() {
  if (yAx[0] == appleXY[0] && yAx[1] == appleXY[1]) {
    reApple();
    if (directions === "down") {
      snakeNum = snake[0].split(",");
      xCord = Number(snakeNum[0]);
      yCord = Number(snakeNum[1]);
      // xCord++;//++
      yAx = [xCord, yCord];
      let updateCords = yAx.join(",");
      snake.push(updateCords);

    }
    if (directions === "up") {
      snakeNum = snake[0].split(",");
      xCord = Number(snakeNum[0]);
      yCord = Number(snakeNum[1]);
      // xCord--; //--
      yAx = [xCord, yCord];
      let updateCords = yAx.join(",");
      snake.push(updateCords);
    }
    if (directions === "left") {
      snakeNum = snake[0].split(",");
      xCord = Number(snakeNum[0]);
      yCord = Number(snakeNum[1]);
      //yCord--; //--
      yAx = [xCord, yCord];
      let updateCords = yAx.join(",");
      snake.push(updateCords);
    }
    if (directions === "right") {
      snakeNum = snake[0].split(",");
      xCord = Number(snakeNum[0]);
      yCord = Number(snakeNum[1]);
      // yCord++; //++
      yAx = [xCord, yCord];
      let updateCords = yAx.join(",");
      snake.push(updateCords);
    }
    food++;
    score.innerText = food;
  }}
  function eatPlum() {
    if (yAx[0] == plumXY[0] && yAx[1] == plumXY[1]) {
      rePlum();
      speed= speed-50}
}
function eatBanana() {
  if (yAx[0] == bananaXY[0] && yAx[1] == bananaXY[1]) {
    reBanana();
    speed=speed+50}
  }
function gameOver() {
snakeNum = snake[0].split(",");
  xCord = Number(snakeNum[0]);
  yCord = Number(snakeNum[1]);
  console.log(xCord, "xcord", yCord, "yCord");
   //if(xCord===undefined||yCord=== undefined){
  if (xCord > 24 || xCord < 0 || yCord < 0 || yCord > 24) {
    clearInterval(inny);
    location.reload();
    alert(`That's a wall! Game Over! Your score is ${food}`);
  }
  for (let i = 1; i < snake.length; i++) {
    if (snake[0] === snake[i]) {
      console.log(snake[0], "the 0", snake[i], "the i")
      clearInterval(inny);
      location.reload();
      alert(`You ate yourself! Game Over! Your score is ${food}`);
    }
  }

}

moveSnake();

// const board = [
// [[0,0],[0,1],[0,2]],
// [[1,0],[1,1],[1,2]],
// [[2,0],[2,1],[2,2]],
// ]

// id each cell, should be cords, cords will need and x and y with a counter, in the function you'll make a new div with the class of cell, with an id (x,y)
