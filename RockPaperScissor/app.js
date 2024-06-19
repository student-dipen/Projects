let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userBoard=document.querySelector("#user-score");
let compBoard=document.querySelector("#comp-score");

const displayWin=(userWin)=>{
  if(userWin){
    userScore++;
    userBoard.innerText=userScore;
    msg.innerText="You Won!";
    msg.style.backgroundColor="green";
  }
  else{
    compScore++;
    compBoard.innerText=compScore;
    msg.innerText="You lose!";
    msg.style.backgroundColor="red";
  }
};

const genCompChoice=()=>{
  choices=["rock","paper","scissor"];
  choiceIndx=Math.floor(Math.random()*3);

  return choices[choiceIndx];
};

const playGame=(userChoice)=>{
  compChoice=genCompChoice();

  if(userChoice==compChoice){
    msg.innerText="Draw";
    msg.style.backgroundColor=" #1a1c1f"
  }
  else{
    let userWin=true;
    if(userChoice=="rock"){
      userWin=compChoice=="paper"?false:true;
    }
    else if(userChoice=="paper"){
      userWin=compChoice=="scissor"?false:true;
    }
    else{
      userWin=compChoice=="rock"?false:true;
    }
    displayWin(userWin);
  }
  
};

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
  });

});