// General Settings
var enemyHealth = 100;
var playerHealth = 100;

// Player
var hpText = document.querySelector('.hptext')
var hpBar = document.querySelector('.health-bar-inside2')

// spells
var iceSpell = document.querySelector('.ice-spell');
var earthSpell = document.querySelector('.earth-spell');
var fireSpell = document.querySelector('.fire-spell');
var airSpell = document.querySelector('.air-spell');
var allSpells = document.querySelector('.spell');

// Enemy stats
var enemyHpText = document.querySelector('.enemy-hptext');
var enemyHpBar = document.querySelector('.health-bar-inside');
var hansName = document.querySelector('.enemy-name');

var hansCharacter = document.querySelector('.enemy-wizard-character');
var playerCharacter = document.querySelector('.player-wizard-character')

var attackSpellStatus = false;

const playersAttacksElement = document.querySelector('.players-attacks');

var fireballGif = document.querySelector('.toggle-fireball');
var tornadoGif = document.querySelector('.toggle-tornado');
var rockGif = document.querySelector('.toggle-rock');




// var iceIsAttacking = false;




// Functions for attacking
iceSpell.addEventListener('click', (e) => {
    enemyhpDown();
});



// --------------------------Ice spell attack---------------------------
function enemyhpDown() {
    if (attackSpellStatus === true) {
        return;
    }
 
    playersAttacksElement.style.opacity = 0;
    attackSpellStatus = true;
    playerCharacter.src = './images/player-wizard gif.gif';


    setTimeout(() => {
        playerCharacter.src = './images/player-wizard.png';
    }, 400)


    enemyHealth -= Math.floor(Math.random() * (20 - 15 + 1)) + 15;;
    enemyHpBar.style.width = enemyHealth + "%";
    enemyHpText.textContent = "HP " + enemyHealth + "/100";


    if (enemyHealth <= 0) {
        enemyHpText.textContent = 'HP 0/100';
        enemyHpBar.style.width = '0%';
        hansCharacter.src = './images/Rip-stone.png';
        setTimeout ( ()=> {
            window.location.href = 'Victory.html';
        },500)
    }

    setTimeout ( () => {
        playerHealth -= Math.floor(Math.random() * (35 - 5 + 1)) + 5;
        hpBar.style.width = playerHealth + "%";
        hpText.textContent = 'HP ' + playerHealth + "/100";
        if (playerHealth <= 0) {
            hpText.textContent = "HP 0/100";
            hpBar.style.width = '0%';
            playerCharacter.src = './images/Rip-stone.png';
            window.location.href = 'Defeat.html';
        }
    }, 1500)


    setTimeout ( () => {
        playersAttacksElement.style.opacity = 1;
        attackSpellStatus = false;
    }, 2000)

};


var rockIsAttacking = false;

// --------------------Earth spell attack-----------------------------
earthSpell.addEventListener('click', (e) => {
    enemyhpDown2();

    if (!rockIsAttacking) {
        rockGif.classList.remove('toggle-rock');
        rockGif.classList.add('spell_animation');
        rockIsAttacking = true;
    }
    setTimeout (() => {
        rockIsAttacking = false;
    }, 2000)
})

function enemyhpDown2() {

    if (attackSpellStatus === true) {
        return;
    }

    playersAttacksElement.style.opacity = 0;
    attackSpellStatus = true;
    playerCharacter.src = './images/player-wizard gif.gif';


    setTimeout(() => {
        playerCharacter.src = './images/player-wizard.png';
    }, 400)


    enemyHealth -= Math.floor(Math.random() * (30 - 5 + 1)) + 5;;
    enemyHpBar.style.width = enemyHealth + "%";
    enemyHpText.textContent = "HP " + enemyHealth + "/100";


    if (enemyHealth <= 0) {
        enemyHpText.textContent = 'HP 0/100';
        enemyHpBar.style.width = '0%';
        hansCharacter.src = './images/Rip-stone.png';
        setTimeout ( ()=> {
            window.location.href = 'Victory.html';
        },500)
    }

    setTimeout ( () => {
        playerHealth -= Math.floor(Math.random() * (35 - 5 + 1)) + 5;
        hpBar.style.width = playerHealth + "%";
        hpText.textContent = 'HP ' + playerHealth + "/100";
        if (playerHealth <= 0) {
            hpText.textContent = "HP 0/100";
            hpBar.style.width = '0%';
            playerCharacter.src = './images/Rip-stone.png';
            window.location.href = 'Defeat.html';
        }
    }, 1000)


    setTimeout ( () => {
        playersAttacksElement.style.opacity = 1;
        attackSpellStatus = false;
    }, 2000)

    setTimeout (()=> {
        rockGif.classList.add('toggle-rock');
    }, 1000)

};


// -----------------------Fire spell attack--------------------------------

var fireballIsAttacking = false;

fireSpell.addEventListener('click', (e) => {
    enemyhpDown3();

    if (!fireballIsAttacking) {
        fireballGif.classList.remove('toggle-fireball');
        fireballGif.classList.add('spell_animation');
        fireballIsAttacking = true;
    }
    setTimeout (() => {
        fireballIsAttacking = false;
    }, 2000)
});


function enemyhpDown3() {


    if (attackSpellStatus === true) {
        return;
    }

    playersAttacksElement.style.opacity = 0;
    attackSpellStatus = true;
    playerCharacter.src = './images/player-wizard gif.gif';

    setTimeout(() => {
        playerCharacter.src = './images/player-wizard.png';
    }, 400)

    enemyHealth -= Math.floor(Math.random() * (25 - 10 + 1)) + 10;;
    enemyHpBar.style.width = enemyHealth + "%";
    enemyHpText.textContent = "HP " + enemyHealth + "/100";


    if (enemyHealth <= 0) {
        enemyHpText.textContent = 'HP 0/100';
        enemyHpBar.style.width = '0%';
        hansCharacter.src = './images/Rip-stone.png';
        setTimeout ( ()=> {
            window.location.href = 'Victory.html';
        },500)
    }


    setTimeout ( () => {
        playerHealth -= Math.floor(Math.random() * (35 - 5 + 1)) + 5;
        hpBar.style.width = playerHealth + "%";
        hpText.textContent = 'HP ' + playerHealth + "/100";
        if (playerHealth <= 0) {
            hpText.textContent = "HP 0/100";
            hpBar.style.width = '0%';
            playerCharacter.src = './images/Rip-stone.png';
            window.location.href = 'Defeat.html';
        }
    }, 1000)


    setTimeout ( () => {
        playersAttacksElement.style.opacity = 1;
        attackSpellStatus = false;
    }, 2000)


    setTimeout (()=> {
        fireballGif.classList.add('toggle-fireball');
    }, 1000)

};




// ----------------------------Air spell attack-------------------------------

var tornadoIsAttacking = false;

airSpell.addEventListener('click', (e) => {
    enemyhpDown4();

    if (!tornadoIsAttacking) {
        tornadoGif.classList.remove('toggle-tornado');
        tornadoGif.classList.add('spell_animation');
        tornadoIsAttacking = true;
    }
    setTimeout (() => {
        tornadoIsAttacking = false;
    }, 2000)

})

function enemyhpDown4() {

    if (attackSpellStatus === true) {
        return;
    }

    playersAttacksElement.style.opacity = 0;
    attackSpellStatus = true;
    playerCharacter.src = './images/player-wizard gif.gif';

    setTimeout(() => {
        playerCharacter.src = './images/player-wizard.png';
    }, 400)


    enemyHealth -= Math.floor(Math.random() * (30 - 5 + 1)) + 5;;
    enemyHpBar.style.width = enemyHealth + "%";
    enemyHpText.textContent = "HP " + enemyHealth + "/100";


    if (enemyHealth <= 0) {
        enemyHpText.textContent = 'HP 0/100';
        enemyHpBar.style.width = '0%';
        hansCharacter.src = './images/Rip-stone.png';
        setTimeout ( ()=> {
            window.location.href = 'Victory.html';
        },500)
    }

    setTimeout ( () => {
        playerHealth -= Math.floor(Math.random() * (35 - 5 + 1)) + 5;
        hpBar.style.width = playerHealth + "%";
        hpText.textContent = 'HP ' + playerHealth + "/100";
        if (playerHealth <= 0) {
            hpText.textContent = "HP 0/100";
            hpBar.style.width = '0%';
            playerCharacter.src = './images/Rip-stone.png';
            setTimeout (() => {
                window.location.href = 'Defeat.html';
            }, 500)
        }
        
    }, 1000)



    setTimeout ( () => {
        playersAttacksElement.style.opacity = 1;
        attackSpellStatus = false;
    }, 2000)



    setTimeout (()=> {
        tornadoGif.classList.add('toggle-tornado');
    }, 1000)

};




// setTimeout(() => {
 
// }, 500);




// Math.random() * (20 - 10) + 10;
// Math.random() * 10 + 10

// 0.5 * 10 = 5
// 0.8 * 10 = 8
// 0.3 * 10 = 3

// 0 * 10 = 0;
// 1 * 10 = 10;

// Math.floor(Math.random() * (20 - 10 + 1)) + 10;

// Math.floor(Math.random * 11 + 10);

// Math.floor(0.234 * 11 + 10)

// Math.floor(2.574 + 10)

// Math.floor(12.574);

// 12






// Helpfull code from assignments



// RANDOM NAME BUT WITH A BUTTON OR A FUNCTION

// var namen = ["James", "Peter", "Jackson", "Bob"];

// var button = document.querySelector ('button')



// function betalen (){

// var pElement = document.querySelector ('p.naam');

// var randomNummer = Math.random()*4;

// randomNummer = Math.floor(randomNummer);

// pElement.textContent = namen[randomNummer];

// };


// button.addEventListener("click", betalen);









// HOE JE EEN RANDOM NAAM KRIJGT UIT EEN ARRAY
// console.log ("Hello World");

// var namen = ["James", "Peter", "Jackson", "Bob"];

// var pElement = document.querySelector ('p.naam');

// var randomNummer = Math.random()*4;

// randomNummer = Math.floor(randomNummer);

// pElement.textContent = namen[randomNummer];