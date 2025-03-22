console.log("JS works");

const playerScoreDis = document.querySelector(".player-score");  
const pcScoreDis = document.querySelector(".pc-score"); 
const uSelection = document.querySelector(".u-selection");  
const pcSelection = document.querySelector(".pc-selection");  
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const sci = document.getElementById("sci");
let pcScore = 0;
let playerScore = 0;

const rules = {
    rock: { beats: 'sci' },
    paper: { beats: 'rock' },
    sci: { beats: 'paper' }
};


rock.addEventListener('click', selectWeapon);
paper.addEventListener('click', selectWeapon);
sci.addEventListener('click', selectWeapon);

function selectWeapon(event) {
    let playerWeapon = null;
    playerWeapon = event.target.id;
    console.log('Selected weapon: ',playerWeapon);
    let pcWeapon = getRandomWeapon(); 
    console.log('PC Selected weapon: ',pcWeapon);
    uSelection.innerHTML = `<div class="${playerWeapon}"></div>`;
    pcSelection.innerHTML = `<div class="${pcWeapon}"></div>`;
    whoWon(playerWeapon,pcWeapon);
    checkGame();

}

function getRandomWeapon() {
    const weapons = ["rock", "paper", "sci"];
    return weapons[Math.floor(Math.random() * weapons.length)];
}


function whoWon(playerWeapon, pcWeapon) {
    if (playerWeapon === pcWeapon) {
        console.log('draw');
        console.log('PC score: ',pcScore,'Player score: ',playerScore);
        return 'draw';
    }

    if (rules[playerWeapon].beats === pcWeapon) {
        console.log('You Won');
        playerScore++;
        //playerScoreDis.innerHTML += `${playerScore}`;
        console.log('PC score: ',pcScore,'Player score: ',playerScore);
        return 'win';
    } else {
        console.log('You Lose PC score: ',pcScore);
        pcScore++;
        console.log('PC score: ',pcScore,'Player score: ',playerScore);
        return 'lose';
    }
}

function checkGame () {
    if ( pcScore >= 3 ){        
        alert(`You Lose! Player score: ${playerScore} PC score: ${pcScore}`);
        resetScore();
    }
    else if ( playerScore >= 3){
        alert(`You Won! Player score: ${playerScore} PC score: ${pcScore}`); 
        resetScore();
    }
}

resetScore = () => {
    console.clear();
    pcScore = 0;
    playerScore = 0;
}






