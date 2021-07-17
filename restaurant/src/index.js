import './styles/style.css';
import './scripts/home.js';
import * as util from './scripts/util.js';

function initiatePage(){
    console.log(util)
    // get div#content
    const body = document.getElementById('content');

    // create container for the header
    const container = document.createElement('div');
    // container for links to center the text 
    const linkContainer = document.createElement('div'); 
    // links subcontainer, use for not affecting the other link when hovering
    const links = document.createElement('div');
    linkContainer.className = "link-container";
    links.id = "links";
    container.id = "header";

    const logo = document.createElement('h1');
    logo.textContent = "Restaurant Name";
    logo.className = "logo";


    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    util.setlinkList({home, menu, contact});
    util.linkList[util.current].classList.add('active');

    Object.values(util.linkList).forEach((link) => {
        link.onclick = () => {
            if(!link.classList.contains('active')){
                util.setCurrent(link.textContent.toLowerCase());
                util.removeActiveList(Object.values(util.linkList));
                link.classList.add('active')
            }
        }
    });

    Object.values(util.linkList).forEach((link) => {
        links.appendChild(link);
    });
    linkContainer.appendChild(links)
    container.appendChild(logo);
    body.appendChild(container);
    body.appendChild(linkContainer);
}

initiatePage()