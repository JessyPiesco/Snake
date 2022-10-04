const mainSnake = document.getElementById("mainSnake")
let rows = document.getElementsByClassName("gridRow");
let cell = document.getElementsByClassName("cell")

let index=[]


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
      cellBlock.setAttribute("id", `${j}-${i}`)

      console.log(cellBlock)
      rows[j].appendChild(cellBlock).className="cell"

    }
  }
}
makeBoard()

// function assignID (){

//   for(let i=0; i<=rows; i++){
//     rowN=rows[i]
//     console.log(rowN)
//     for(let j=0; j<=cell; j++){

//       index.push([rows[i],cell[j]])
//     }
//   }

// }
// assignID()
// console.log(index)

// const board = [
// [[0,0],[0,1],[0,2]],
// [[1,0],[1,1],[1,2]],
// [[2,0],[2,1],[2,2]],
// ]

// id each cell, should be cords, cords will need and x and y with a counter, in the function you'll make a new div with the class of cell, with an id (x,y)
