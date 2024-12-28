// TODO your DOM code goes here
let checkboard = document.getElementById("checkboard");
let interval_id;

let board = Array.from({ length: 25 }, (_, i) =>
  Array.from({ length: 25 }, (_, j) => (i + j) % 2 === 0)
);

let originalBoard = board.map(row => Array.from(row));

const createTable = () => {
  board.map((arr) => {
    let row = document.createElement("tr");
    arr.map((e) => {
      var col = document.createElement("td");
      col.id = e ? "trueCell" : "falseCell"; 
      row.append(col);
    });
    checkboard.append(row);
  });
};

createTable();

function step(){
  board = stepBoard(board);
  updateTable();
  
}

function go(){
  if(!interval_id){
    interval_id = setInterval(function(){
      step();
    }, 100); 
  }
}

function reset(){
  board = originalBoard;
  pause();
  updateTable();

}

function updateTable(){
  let checkboard_rows = checkboard.children;
  for(let row = 0; row < 25; row++){
    let checkboard_cells = checkboard_rows[row].children;
    for(let col = 0; col < 25; col ++){
      checkboard_cells[col].id = board[row][col] ? "trueCell" : "falseCell";
    }
  }
}

function randomize(){
  let new_board = [];
  for(let new_row = 0; new_row < 25; new_row++){
    let cur_row = [];
    for(let new_col = 0; new_col < 25; new_col++){
      let randomNum = Math.random();
      if(randomNum >= 0.5){
        cur_row.push(true);
      }else{
        cur_row.push(false);
      }
    }
    new_board.push(cur_row);
  }
  board = new_board; 
  pause();
  updateTable();
}

function pause(){
  clearInterval(interval_id);
	interval_id = undefined; 
}

let stepButton = document.getElementById("step");
let resetButton = document.getElementById("reset");
let goButton = document.getElementById("go");
let pauseButton = document.getElementById("pause");
let randomButton = document.getElementById("random");

stepButton.addEventListener("click", step);
resetButton.addEventListener("click",  reset); 
goButton.addEventListener("click", go);
pauseButton.addEventListener("click", pause );
randomButton.addEventListener("click", randomize);

// once you've replaced conway.js with your solution to the previous assignment
// this will print [[false, true, false], [false, true, false]]
console.log(
  stepBoard([
    [true, false, true],
    [false, false, true],
  ]),
);
