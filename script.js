const hands = [
    {
        icon : "✌️",
        label : "Scissor"
    },
    {
        icon: "🖐",
        label : "Paper"
    },
    {
        icon: "✊",
        label: "Stone"
    }
]
var userIndex = 0;
var pcIndex = 0;

const triesleft = document.querySelector('.tries .left');

const handBtn = document.querySelector('.hand.user');
const handBtnIcon = document.querySelector('.hand.user .icon');
const handBtnLabel = document.querySelector('.hand.user label');

const pcBtnIcon = document.querySelector('.hand.pc .icon');
const pcBtnLabel = document.querySelector('.hand.pc label');

const runBtn = document.querySelector('.run');

var pcScore = document.querySelector('.score.pc .value');
var userScore = document.querySelector('.score.user .value');

window.onload = ()=>{

    handBtnIcon.innerText = hands[0].icon;
    handBtnLabel.innerText = hands[0].label;

    pcBtnIcon.innerText = hands[0].icon;
    pcBtnLabel.innerText = hands[0].label;
}

handBtn.addEventListener("click",()=>{

    userIndex = (userIndex + 1)%3;
    handBtnIcon.innerText = hands[userIndex].icon;
    handBtnLabel.innerText = hands[userIndex].label;

})

const changeBanner = (string) => {
    document.querySelector('.banner').innerText = string;
};

const updatePcSocre = () => {
    var newScore = Number(pcScore.innerText) + 10;
    pcScore.innerText = newScore;
}

const updateuserSocre = () => {
  
    var newScore = Number(userScore.innerText) + 10;
    userScore.innerText = newScore;
}
runBtn.addEventListener("click", () => {
    
    let intervalId;
    var tries = Number(triesleft.innerText) - 1;
    triesleft.innerText = tries;

    intervalId = setInterval(() => {
        const pcIndex = Math.floor(Math.random() * hands.length);
        pcBtnIcon.innerText = hands[pcIndex].icon;
        pcBtnLabel.innerText = hands[pcIndex].label;
    }, 100); 


    setTimeout(() => {
        clearInterval(intervalId);
        const finalIndex = Math.floor(Math.random() * hands.length);
        pcIndex = finalIndex;
        pcBtnIcon.innerText = hands[finalIndex].icon;
        pcBtnLabel.innerText = hands[finalIndex].label;


        if(pcIndex == userIndex){
            changeBanner("Draw!");
        }else if(pcIndex == 0 && userIndex == 1){
            changeBanner("Computer won!");
            updatePcSocre();
        }else if(pcIndex == 1 && userIndex == 2){
            changeBanner("Computer won!");
            updatePcSocre();
        }else if(pcIndex == 2 && userIndex == 0){
            changeBanner("Computer won!");
            updatePcSocre();
        }else{
            changeBanner("You won!");
            updateuserSocre();
        }

        setTimeout(()=>{
            if(tries == 0){
                if(Number(pcScore.innerText) == Number(userScore.innerText)){
                    window.alert("Game Over : Draw!");
                }else if(Number(pcScore.innerText) > Number(userScore.innerText)){
                    window.alert("Game Over : Computer Won the game!");
                }else{
                    window.alert("Game Over : You Won the game!");
                }
                location.reload();
            }
        },1000);


    }, 2000); 

});
