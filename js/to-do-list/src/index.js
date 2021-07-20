import './styles/home.css'
import './styles/index.css'
import createHome from './scripts/home'
import { createContainer , insertChildren } from './scripts/util';


function createNav(){
    const logo = document.createElement('p');
    logo.id = "nav-logo";
}

function initialDisplay(){
    const content = document.getElementById("content");
    const nav = createContainer('nav', 'nav');
    const drawer = createContainer('drawer');
    const main = createContainer('main');
    const footer = createContainer('footer', 'footer');

    insertChildren(content, [drawer, nav, main, footer])
}

initialDisplay();
createHome();