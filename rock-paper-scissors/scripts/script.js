// Messages
const WEAPON = ["ROCK", "PAPER", "SCISSOR"];
const LOSE_MSG = "You LOSE!";
const WIN_MSG = "You WIN!";
const TIE_MSG = "It's a TIE";
const ORG_LOSE_MSG = "You lose little bitch";
const ORG_WIN_MSG = "You win lucky bastard";
const SELECT_TIME = 1500;

// Elements
const fight_btn = document.getElementById('fight');
const p_selected_text = document.getElementById('player_selected_text');
const e_selected_text = document.getElementById('enemy_selected_text');
const retry_btn = document.getElementById('try_again');
const options = Array.from(document.getElementsByClassName('s'));
const enemy_options = Array.from(document.getElementsByClassName('d'));
const selected = document.getElementById('player_select');
const enemy_selected = document.getElementById('computer_select');
const player_life = document.getElementById('player-lives').children;
const enemy_life = document.getElementById('enemy-lives').children;
const battle_result = document.getElementById('battle-result');
const round_result = document.getElementById('result');


// Variables
var pachinko;
let player = "ROCK";
let enemy = "";
let random = 0;
let state = "";
let b = false;
let life = [5,5];

// Animation End
selected.addEventListener('animationend', (e) => {
    selected.classList.remove("player-anim");
    player_life.item(life[0]).classList.remove("computer-anim");
    player_life.item(life[0]).style.display = "none";
    selected.classList.remove("damage-overlay");
});
enemy_selected.addEventListener('animationend', (e) => {
    enemy_life.item(life[1]).classList.remove("computer-anim");
    enemy_life.item(life[1]).style.display = "none";
    enemy_selected.classList.remove("damage-overlay");
    enemy_selected.classList.remove("computer-anim");
});

// Mouse activity on Fight button
function button_down(){
    fight_btn.style.borderBottom = 0;
}
function button_up(){
    fight_btn.style.borderBottom = '10px solid #a69d36';
}

// Change player selected weapon
const select_weapon = (e) =>{
    if(fight_btn.getAttribute("disabled") == null){
        options.forEach(opt => {
            opt.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        set_weapon(e.currentTarget.id);
    }
};
options.forEach(opt => opt.addEventListener('click', select_weapon)); // Add onClick listener for the options
function set_weapon(id) {
    selected.classList.remove('rock');
    selected.classList.remove('paper');
    selected.classList.remove('scissors');
    if(id == 'rock'){
        player = WEAPON[0];
        p_selected_text.textContent = WEAPON[0];
        selected.classList.add('rock');
    }else if(id == 'paper'){
        player = WEAPON[1];
        p_selected_text.textContent = WEAPON[1];
        selected.classList.add('paper');
    }else{
        player = WEAPON[2];
        p_selected_text.textContent = WEAPON[2];
        selected.classList.add('scissors');
    }
}


// Change computer selected weapon
function enemy_weapon(index){
    enemy_options.forEach(opt => {
        opt.classList.remove('e-active');
    });
    enemy_options[index].classList.add('e-active');
    set_enemy_weapon(enemy_options[index].id);
}
function set_enemy_weapon(id) {
    enemy_selected.classList.remove('rock');
    enemy_selected.classList.remove('paper');
    enemy_selected.classList.remove('scissors');
    if(id == 'enemy_rock'){
        e_selected_text.textContent = WEAPON[0];
        enemy_selected.classList.add('rock');
    }else if(id == 'enemy_paper'){
        e_selected_text.textContent = WEAPON[1];
        enemy_selected.classList.add('paper');
    }else{
        e_selected_text.textContent = WEAPON[2];
        enemy_selected.classList.add('scissors');
    }
}

// Pick a random option
function randomSelect(){
    random = Math.floor(Math.random() * 3);
    enemy_weapon(random);
    enemy = WEAPON[random];
}

// Setups the computer's option before starting
function play(){
    if(fight_btn.getAttribute("disabled") == null){
        battle_result.style.display = "none";
        round_result.style.display = "none";
        enemy_selected.classList.add('invisible');
        fight_btn.setAttribute("disabled", "true");
        var pachinko = setInterval(randomSelect, 50);// random select every .05 seconds
        setTimeout(clearInterval, SELECT_TIME, pachinko);// stop pachinko after 2 seconds
        setTimeout(startRound,SELECT_TIME); // start battle
    }
}

// Rock-Paper-Scissor Logic. Compare the selected weapon by two users
function startRound(){
    enemy_selected.classList.remove('invisible');
    if(player == enemy){
        state = "tie"; // Player selected the same artillery ;;
    }else{
        if(player == WEAPON[0]){ // Player choose  ROCK
            state = (enemy == WEAPON[1])? "lose" : "win"; // Computer either choose PAPER or SCISSOR ;;
        }else if(player == WEAPON[1]){ // Player choose  PAPER
            state = (enemy == WEAPON[2])? "lose" : "win"; // Computer either choose SCISSOR or ROCK ;;
        }else{ // Player choose  Scissor
            state = (enemy == WEAPON[0])? "lose" : "win"; // Computer either choose ROCK or PAPER ;;
        }
    }
    fight_btn.removeAttribute("disabled");
    // Subtract life
    switch(state){
        case "win":
            life[1] -=1;
            enemy_life.item(life[1]).classList.add("computer-anim");
            break;
        case "lose":
            life[0] -=1;
            player_life.item(life[0]).classList.add("computer-anim");
            break;
        default:
            console.log("Try again blyat")
    }
    // Damage animation
    if(state=="win"){
        console.log(ORG_WIN_MSG);
        round_result.textContent = WIN_MSG;
        battle_result.textContent = player + " beats " + enemy;
        enemy_selected.classList.add("computer-anim");
        enemy_selected.classList.add("damage-overlay");
    }else if(state=="lose"){
        console.log(ORG_LOSE_MSG);
        round_result.textContent = LOSE_MSG;
        battle_result.textContent = enemy + " beats " + player;
        selected.classList.add("damage-overlay");
        selected.classList.add("player-anim");
    }else{
        round_result.textContent = TIE_MSG;
        battle_result.textContent = "";
    }
    // If a player is dead, ends the game
    if(Math.min(life[0], life[1]) == 0){
        endGame();
        return;
    }
    round_result.style.display = "block";
    battle_result.style.display = "block";
}

// Ends the game. Shows the retry button and messages
function endGame(){
    battle_result.textContent = "Try Again?";
    fight_btn.style.display = "none";
    retry_btn.style.display = "block";
    round_result.style.display = "block";
    battle_result.style.display = "block";
}
function restart(){
    Array.from(player_life).forEach(e => e.style.display="block");
    Array.from(enemy_life).forEach(e => e.style.display="block");
    fight_btn.style.display = "block";
    retry_btn.style.display = "none";
    life = [5,5]
    state = "tie"
}