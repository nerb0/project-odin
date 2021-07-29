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
    const nav = createContainer('nav', 'nav');// container for the nav bar
    const drawer = createContainer('drawer');// container for the drawer
    drawer.appendChild(createDrawer());
    // drawer.classList.add('opened-container');
    const main = createContainer('main');// container for the tasks content
    const footer = createContainer('footer', 'footer'); // container for the footer
    const overlay = document.createElement('div'); // container for the overlay
    overlay.id = "overlay"

    insertChildren(content, [overlay, drawer, nav, main, footer])
}

initialDisplay();
createHome();