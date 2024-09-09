
const playerTurn= document.querySelector("#player-turn");
const playerXScore = document.querySelector("#player-x");
const playerOScore = document.querySelector("#player-o");




let player = "X"; 


let scoreX = 0;
let scoreO = 0;



const winConditions = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal
  [2, 4, 6]  // diagonal
];



const board = Array(9).fill(" "); // Initializing with empty spaces


function handler(event) {
  const cell = event.target;
  const cellIndex = Array.from(childElements).indexOf(cell);

 






  if (board[cellIndex] !== " ") {
    return; 
  }



  if (player === "X") {
    cell.textContent = "X";
    board[cellIndex] = "X";
  
  } else {
    cell.textContent = "O";
    board[cellIndex] = "O";
   
  }

  function checkForWin(player){
    for (let i = 0; i < winConditions.length; i++) {
       const [a, b, c] = winConditions[i];
       if (board[a] === player && board[b] === player && board[c] === player) {
       
         return true; 
       }
       
     }
     return false;
 }
    
  
     

  console.log("Player:", player);
console.log("Cell Index:", cellIndex);
console.log("Board:", board);





   if (checkForWin(player)) {
 
    playerTurn.innerHTML=`Player ${player} wins!`
   
    if (player=="X"){
      scoreX++;

    }
    else{
      scoreO++;
    }
    playerXScore.innerHTML=`Player X : ${scoreX}` ;
    playerOScore.innerHTML=`Player O : ${scoreO}`;

  

    board.fill(player);
    return;
    
    
     
   }
 

if (player === "X") {
  player = "O";
} else {
  player = "X";
}


function checkForTie() {
  return board.every(cell => cell !== " ");
}


if(checkForTie()){
  playerTurn.innerHTML=`It's a Tie!`
return;
}


playerTurn.innerHTML=`Player ${player}'s turn`;


}




function gameReset(){
  for (let i = 0; i < childElements.length; i++) {
    childElements[i].textContent = "";
  }
  board.fill(" ");
  player = "X"; 
  playerTurn.innerHTML=`Player ${player}'s turn`;

}





const childElements = document.getElementsByClassName("child");
const resetBtn = document.getElementById("reset-button");




for (let i = 0; i < childElements.length; i++) {
  childElements[i].addEventListener('click', handler);
}


resetBtn.addEventListener('click', gameReset);