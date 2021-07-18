import './styles/style.css';
import createHome from './scripts/home.js';
import * as util from './scripts/util.js';
import log from './images/logo2.png';

function initiatePage(){
    // get div#content
    const body = document.getElementById('content');
    const footer = document.createElement('div');
    
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
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";
/* 
    CHANGE THE link list to be function;
*/
    // insert the elements to an object so other scripts will be able to access the elements.
    util.setlinkList({home, menu, contact});
    util.linkList[util.current].classList.add('active');

    // set onclick functionality for the link
    Object.values(util.linkList).forEach((link) => {
        link.onclick = () => {
            if(!link.classList.contains('active')){
                util.setCurrent(link.textContent.toLowerCase());
                util.removeActiveList(Object.values(util.linkList));
                link.classList.add('active')
            }
        }
    });
    // add the links to the subcontainer
    Object.values(util.linkList).forEach((link) => {
        links.appendChild(link);
    });

    footer.className = "footer";

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
    body.appendChild(footer);
    createHome();
}   

initiatePage()