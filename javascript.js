let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice")
const getcompchoice = ()=>{
    let obj = ["Rock" ,"Paper" ,"Scissors"];
    objindex = Math.floor(Math.random*3);
    return obj[objindex];
}
let compchoice = getcompchoice();
const playGame = (userchoice) =>{
    if(userchoice === compchoice){
         msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
    }
    else{

    }
}
choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userchoice = getAttribute("id");
         playGame(userchoice);
    });
});