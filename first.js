let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");
const showUserScore = document.querySelector("#user-score");
const showCompScore =document.querySelector("#comp-score");
const reset = document.querySelector("#reset-btn");

const genComChoice =()=>{
    const option =["rock","paper","scissor"];
    const randInx = Math.floor(Math.random() * 3);
    return option[randInx];
}

const draw = ()=>{
    msgPara.innerText = "Draw! Try Again 😕";
    msgPara.style.backgroundColor ="#081b31";
}

const showWinner = (userwin) => {
    if(userwin){
        msgPara.innerText = "You Win 🥳";
        msgPara.style.backgroundColor ="green";
        userScore++;
        showUserScore.innerText = userScore;
    }
    else{
        msgPara.innerText = "You Lose 😔";
        msgPara.style.backgroundColor ="red";
        compScore++;
        showCompScore.innerText=compScore;
    }
    
}

const playGame = (userChoice)=>{
    const compChoice = genComChoice();
    if(userChoice === compChoice){
        draw();
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice ==="scissor" ? true : false;
        }else if(userChoice === "paper"){
            userwin = compChoice==="rock" ? true : false;
        }
        else{
            userwin = compChoice ==="paper" ? true : false; 
        }

        showWinner(userwin);
    }
}

reset.addEventListener("click",() =>{
    userScore=0;
    compScore=0;
    showUserScore.innerText=userScore;
    showCompScore.innerText=compScore;
})


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
