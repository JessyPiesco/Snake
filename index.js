const mainSnake = document.getElementById("mainSnake")
let rows = document.getElementsByClassName("gridRow");
let cell = document.getElementsByClassName("cell")
let snake= ["0,0"]




// making the board line 6-31
function makeBoard(){
  makeRow(30);
  makeColum(30);
}
function makeRow(num){
  for (let i=0; i<num; i++){
let row= document.createElement("div")
mainSnake.appendChild(row).className="gridRow"

}
}

function makeColum(num){

  for (let i=0; i<rows.length; i++){
    for(let j=0; j<num; j++){
      let cellBlock = document.createElement("div")
      cellBlock.setAttribute("id", `${j},${i}`)

      console.log(cellBlock)
      rows[j].appendChild(cellBlock).className="cell"

    }
  }
}
makeBoard()

function snakeRender(){
  for (let i=0; i<snake.length; i++){

    document.getElementById(snake[i]).classList.toggle("snake");
  }


}
document.body.addEventListener('keydown', moveSnake)

function moveSnake(event){
  // for (let i=0; i<snake.length; i++){
  //   console.log(snake[i])
  // }
let snakeNum= snake[0].split(",")
console.log(snakeNum)
// let xCord= Number(snakeNum[0])
// let yCord= Number(snakeNum[1])
// if (event.keyCode===38){
//   for(let i=0; i<rows; i++){
//     //take ID, split, get, turn i into num and subtract 1, return to string, repeat until it gets to top
//     yCord= yCord - 1;
//     console.log(yCord)
//   }
// }
}
snakeRender()
moveSnake()

// const board = [
// [[0,0],[0,1],[0,2]],
// [[1,0],[1,1],[1,2]],
// [[2,0],[2,1],[2,2]],
// ]

// id each cell, should be cords, cords will need and x and y with a counter, in the function you'll make a new div with the class of cell, with an id (x,y)
