const boxes= document.querySelectorAll(".box");
const gameInfo =document.querySelector(".game-info");
const btn =document.querySelector(".btn");

let player;
let game;

const winning =[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

//intialise the game
 console.log("1");
 function initgame()
{
    player = "X";
    game = ["","","","","","","","",""];
 //ui empty karna
    boxes.forEach((box ,index) =>
    {
        box.innerText ="";
        boxes[index].style.pointerEvents ="all";
        box.classList =`box box${index+1}`;
    });
    btn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${player}`;
}
console.log("2");
//call initgame gunction to run code
initgame();
console.log("3");

function turnPlayer()
{
    if(player=== "X")
    {
        player ="O";
    }
    else
    {
        player ="X";
    }
    //ui update on discription 
    gameInfo.innerText =`current player-${player}`;

}
console.log("4");



function checkGameOver()
{
    let answer ="" ;
    winning.forEach((position) => {

        if( (game[position[0]] !== "" || game[position[1]] !== "" || game[position[2]] !== "") 
            && (game[position[0]] === game[position[1]] ) && (game[position[1]] === game[position[2]])) {
               //check winner ..
                if(game[position[0]] === "X") 
                    answer = "X";
                else {
                    answer = "O";
                } 
                //disable pointer events
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                });
                 //now we know X/O is a winner
                 boxes[position[0]].classList.add("win");
                 boxes[position[1]].classList.add("win");
                 boxes[position[2]].classList.add("win");
            }
    });
console.log("5");
      //it means we have a winner
      if(answer !== "" ) {
        gameInfo.innerText =`Winner Player - ${answer}`;
        btn.classList.add("active");
        return;
    }
    //We know, NO Winner Found, let's check whether there is tie
    let fillCount = 0;
    game.forEach((box) => {
        if(box !== "" )
            fillCount++;
    });
    console.log(fillCount);
      //board is Filled, game is tie
      if(fillCount === 9) {
        gameInfo.innerText = "Game Tied!";
        btn.classList.add("active");
    }
}
function handleClick(index)
{
    if(game[index] === "")
    {
        boxes[index].innerHTML = player;
        game[index] =player;
        boxes[index].style.pointerEvents ="none";
        //turn player 
        turnPlayer();
        //check game finish or not
        checkGameOver();
    }
}
boxes.forEach((box , index) => 
{
    box.addEventListener("click", () =>
    {
        handleClick(index);
    }) 
});

console.log("7");
 btn.addEventListener("click" , initgame);
