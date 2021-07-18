import '../styles/style.css';
import '../styles/menu.css';
import * as util from './util.js';
import borgir from '../images/logo2.png';
import drink from '../images/3.png';
import combo from '../images/4.png';

// const burgers = "abcdefghijklmnopqrstuvwxyz";
function createOptions(){

    const optionsContainer = document.createElement('div');
    optionsContainer.className = "options-container";

    let options = [];
    const burgerOpt = document.createElement('button');
    const drinksOpt = document.createElement('button');
    const comborOpt = document.createElement('button');

    return optionsContainer;
}

function createMeals(){
    const mealContainer = document.createElement('div');
    mealContainer.className = "meal-container";
    const meals = [];
    for(let i = 0; i < 7; i++){
        const meal = document.createElement('div');
        const mealImage = new Image();
        mealImage.src = borgir;
        mealImage.className = 'meal-image';
        const mealName = document.createElement('h1');
        mealName.textContent = `Burgers[${i}]`;
        mealName.className = 'meal-name';
        const mealPrice = document.createElement('p');
        mealPrice.textContent = "00.00";
        mealPrice.className = 'meal-price';

        util.insertChildren(meal, [mealImage, mealName, mealPrice]);
        meals.push(meal);
    }
    console.log()
    util.insertChildren(mealContainer, meals);
    return mealContainer;
}

function createMenu(){
    const content = util.createMain();
    const menuContainer = document.createElement('div');
    menuContainer.className = "menu-container";

    

    util.insertChildren(menuContainer, [createMeals(), createOptions()]);
    util.insertChildren(content, [menuContainer]);
    util.insertToMain(content);
}

export default createMenu