let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const drawgame=()=>{
    console.log("game was draw play again");
    msg.innerText="matchdraw";
    msg.style.backgroundColor="blue";
};

const gencompchoice = ()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
};

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const showWinner = (userWin, compchoice, userchoice) => {
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText=`you win!your ${userchoice} beats ${compchoice}`;
       msg.style.backgroundColor= "green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you loss");
        msg.innerText=`you lost!your${compchoice}beats${userchoice}`;
       msg.style.backgroundColor="red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice=",userchoice);
    const compChoice=gencompchoice();
    console.log("comp choice=",compChoice);

    if (userchoice === compChoice) {
        drawgame();
    }else{
    let userWin=true;
    if(userchoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }else if(userchoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
 } else {
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin, compChoice, userchoice);
}  
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
     const userchoice=choice.getAttribute("id");
     playgame(userchoice);
    });
});
