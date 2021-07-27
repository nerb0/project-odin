import './styles/home.css'
import './styles/index.css'
import './styles/drawer.css'
import createHome from './scripts/home'
import createDrawer from './scripts/drawer'
import { createContainer , insertChildren } from './scripts/util';


function createNav(){
    const logo = document.createElement('p');
    logo.id = "nav-logo";
}

function initialDisplay(){
    const content = document.getElementById("content");
    const nav = createContainer('nav', 'nav');
    const drawer = createContainer('drawer');
    drawer.appendChild(createDrawer());
    const main = createContainer('main');   
    const footer = createContainer('footer', 'footer');
    const overlay = document.createElement('div');
    overlay.id = "overlay"

    insertChildren(content, [overlay, drawer, nav, main, footer])
}

initialDisplay();
createHome();