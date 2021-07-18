/* 
import '../styles/style.css';
import '../styles/menu.css'; 
*/
import * as util from './util.js';
import borgir from '../images/logo2.png';
import drink from '../images/3.png';
import combo from '../images/4.png';

const options = {
    burgers: [borgir, "Burger"],
    drinks: [drink, "Drink"],
    combos: [combo, "Combo"],
}

function createMeals(len, type){
    const mealSubContainer = util.createContainer('mealSubContainer');
    mealSubContainer.className = "meal-sub-container";
    if(window.innerWidth < 1160) mealSubContainer.style.gridTemplateColumns = `repeat(${Math.floor(window.innerWidth/200)}, 1fr)`;
    else mealSubContainer.style.gridTemplateColumns = 'repeat(5, 1fr)';
     
    window.addEventListener('resize', () => {
        if(window.innerWidth < 1160) mealSubContainer.style.gridTemplateColumns = `repeat(${Math.floor(window.innerWidth/200)}, 1fr)`;
        else mealSubContainer.style.gridTemplateColumns = `repeat(5, 1fr)`;;
    })
    const meals = [];
    for(let i = 0; i < len; i++){
        const meal = document.createElement('div');
        const mealImage = new Image();
        mealImage.src = type[0];
        mealImage.className = 'meal-image';
        const mealName = document.createElement('h1');
        mealName.textContent = `${type[1]}[${i}]`;
        mealName.className = 'meal-name';
        const mealPrice = document.createElement('p');
        mealPrice.textContent = `${Math.floor(Math.random() * 20 + 20) + i}.00`;
        mealPrice.className = 'meal-price';

        // Remove the duplicating borders;
        util.insertChildren(meal, [mealImage, mealName, mealPrice]);
        meals.push(meal);
    }
    util.insertChildren(mealSubContainer, meals);
    return mealSubContainer;
}

function initiateMeal(len, type){
    const mealContainer = util.createContainer('meal-container');
    mealContainer.className = 'meal-container';
    const mealSubContainer = createMeals(len, type);
    
    util.insertChildren(mealContainer, [mealSubContainer]);
    return mealContainer;
}

function createOptions(){
    const optionsContainer = document.createElement('div');
    optionsContainer.className = "options-container";
    util.checkViewport(optionsContainer, 1160, 'grid');

    const burgerOpt = document.createElement('button');
    burgerOpt.textContent = "Burgers";
    burgerOpt.id = "burgers";
    burgerOpt.className = "current";
    const drinksOpt = document.createElement('button');
    drinksOpt.textContent = "Drinks";
    drinksOpt.id = "drinks";
    const comboOpt = document.createElement('button');
    comboOpt.textContent = "Combos";
    comboOpt.id = "combos";

    let buttons = [burgerOpt, drinksOpt, comboOpt];
    buttons.forEach((button) => {
        button.classList.add("btn");
        button.onclick = () =>{
            if(!button.classList.contains('current')){
                const newMeal = createMeals(Math.floor(Math.random() * 8 + 2), options[button.id]);
                util.insertTo(newMeal, 'meal-container');
                util.removeClass(buttons, 'current')
                button.classList.add('current')
            }
            
        }
    })

    util.insertChildren(optionsContainer, buttons);
    return optionsContainer;
}

function createMenu(){
    const content = util.createContainer('main');
    const menuContainer = document.createElement('div');
    menuContainer.className = "menu-container";
    if(window.innerWidth < 1160) menuContainer.style.gridTemplateColumns = '1fr';
    else menuContainer.style.gridTemplateColumns = '8fr 2fr';
     
    window.addEventListener('resize', () => {
        if(window.innerWidth < 1160) menuContainer.style.gridTemplateColumns = '1fr';
        else menuContainer.style.gridTemplateColumns = '8fr 2fr';
    })
    util.insertChildren(menuContainer, [initiateMeal(9, options.burgers), createOptions()]);
    util.insertChildren(content, [menuContainer]);
    util.insertTo(content, 'main-container');
}
export default createMenu