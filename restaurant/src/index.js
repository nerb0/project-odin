import './styles/style.css';
import createHome from './scripts/home.js';
import createMenu from './scripts/menu.js';
import * as util from './scripts/util.js';
import log from './images/logo2.png';
import gh from './images/github-64.png';



const something = () => {
    console.log('waw')
}
let current = 'menu';
let tabFunction = {
    home: createHome,
    menu: createMenu,
    contact: something
}
function createFooter(){
    const footer = document.createElement('div');
    footer.className = "footer";

    const credits = document.createElement('p');
    credits.textContent = 'Icons designed by ';
    credits.className = 'credits';
    const creditLink = document.createElement('a');
    creditLink.href = "https://www.freepik.com/vectors/logo"
    creditLink.textContent = 'roserodionova / Freepik';

    const about = new Image()
    about.className = 'github';
    about.src = gh;
    about.setAttribute('align', 'right')
    credits.appendChild(creditLink);
    credits.appendChild(about);
    footer.appendChild(credits);

    return footer
}

function initiatePage(){
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

    // create logo template for the webpage
    const logoText = document.createElement('h1');
    logoText.className = "logoText";
    const logo = new Image();
    logoText.textContent = "Borgir Fever";
    logo.className = "logo";
    logo.src = log

    // create the element for the links
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');
    home.id = "home";
    menu.id = "menu";
    contact.id = "contact";
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";
    const tabList = {home,menu, contact}

    // insert the elements to an object so other scripts will be able to access the elements.
    tabList[current].classList.add('active');

    // set onclick functionality for the link
    Object.values(tabList).forEach((link) => {
        link.onclick = () => {
            if(!link.classList.contains('active')){
                current = link.id;
                util.removeActiveList(Object.values(tabList));
                link.classList.add('active')
                tabFunction[current]();
            }
        }
    });
    // add the links to the subcontainer
    Object.values(tabList).forEach((link) => {
        links.appendChild(link);
    });


    // Create container for the content of each tab
    const main = document.createElement('div');
    main.id = "main-container";

    // add the subcontainer to the main link container
    linkContainer.appendChild(links)
    container.appendChild(logo); // add the logo in a container to center
    container.appendChild(logoText); 

    body.appendChild(container); // add the logo first because
    body.appendChild(linkContainer); // insert the links after
    body.appendChild(main);
    body.appendChild(createFooter());
}   


initiatePage();
tabFunction[current]();
