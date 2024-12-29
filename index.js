const playerEl =document.getElementById('player')
const computerEl =document.getElementById('computer')
const resultEl =document.getElementById('result')
const rockBtn =document.getElementById('rock')
const paperBtn =document.getElementById('paper')
const scissorBtn =document.getElementById('scissor')
const playerwin=document.getElementById('playerwin')
const compwin= document.getElementById('compwin')
    const drew= document.getElementById('drew')



let playerChoice =""
let computerChoice =""
let result=""
let draw=""
let dre="0"
let player="0"
let comp="0"


function computerchoose(){
    let randomChoice = Math.floor(Math.random()*3)+1;
    switch(randomChoice){
        case 1:
            computerChoice="rock";
            break;
            case 2:
                computerChoice="paper";
                break;
                case 3:
                computerChoice="scissor";
                break;

    }
    computerEl.textContent=`computer:${computerChoice}`;

    
}
function res (){
    if(
    playerChoice===computerChoice
    ){
        
    result='draw';
    }
    else if(
        playerChoice==="rock"&& computerChoice==="scissor"
    ){
        result='player win'

    }
    else if(
        playerChoice==="scissor"&& computerChoice==="paper"
    ){
        result='player win'
    }
    else if(
        playerChoice==="rock"&& computerChoice==="paper"
    ){
        result='player win'
    }
    else if(
        playerChoice==="paper"&& computerChoice==="rock"
    ){
        result='computer win'
    }
    else if(
        playerChoice==="paper"&& computerChoice==="scissor"
    ){
        result='computer win'
    }
    else if(
        playerChoice==="scissor"&& computerChoice==="rock"
    ){
        result='computer win'
    }
    else{
        alert('error')
    }

resultEl.innerText=`result:${result}`;
if(result==='draw'){
    dre ++;
}
else if(result==='player win'){
    player ++;
}
else if(result==='computer win'){
    comp ++;
}

else {
    alert('count fail')
}
playerwin.innerText=`no. of time player win:${player}`;
compwin.innerText=`no. of time comp win:${comp}`;
drew.innerText=`no. of time draw:${dre}`;
        
    
}

rockBtn.addEventListener('click',()=>{
    playerChoice = 'rock'
    playerEl.innerText = `Player: ${playerChoice}`;
    computerchoose();
    res();
})
paperBtn.addEventListener('click',()=>{
    playerChoice = 'paper'
    playerEl.innerText = `Player: ${playerChoice}`;
    computerchoose();
    res();
})

scissorBtn.addEventListener('click',()=>{
    playerChoice = 'scissor'
    playerEl.innerText = `Player: ${playerChoice}`;
    computerchoose();
    res();
})

