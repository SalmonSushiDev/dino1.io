//Consts#1//
const dinoPlayer1 = document.getElementById('dino1');
const cactiEnemy1 = document.getElementById('cacti1');

//Variable#1//
var scoreTxt1 = document.getElementById('scoreTxt1');

//Let#1//
let score1 = 0;

//Function#1//
console.log("Yes, the cactus block doesn't do anything, you just get points for jumping");
console.log("(Also this is just a Practice Game for Dino Run :] )");

    //AddEventListener#1
document.addEventListener('keydown', function(_event){dinoJump1();})
startBtn1.addEventListener('click', _=>{playGame1();})
pauseBtn1.addEventListener('click', _=>{stopGame1();})

function dinoJump1(){
    if(dinoPlayer1.classList != 'dinoHasJump1'){
        dinoPlayer1.classList.add('dinoHasJump1');
        setTimeout(function(){dinoPlayer1.classList.remove('dinoHasJump1');}, 505);
        score1 = score1 + 1;
        scoreTxt1.innerHTML = score1;
        console.log(score1);
    }
}