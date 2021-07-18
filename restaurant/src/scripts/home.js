/* 
import '../styles/style.css';
import '../styles/home.css'; 
*/
import * as util from './util.js';
import bandf from '../images/4.png';
import ok from '../images/1.png';
import createMenu from './menu.js';

// create tagline
function createTagline(){
    // create a container for the tagline
    const taglineContainer = document.createElement('div')
    taglineContainer.className = "tagline-container"

    // create a node for the biggest font
    const firstTag = document.createElement('div');
    firstTag.textContent = "CHONKY";

    // create a node for the 2nd biggest font
    const secondTag = document.createElement('div');
    secondTag.textContent = "JUICY";

    // create a node for the 2nd biggest font
    const dogtag = document.createElement('div');
    dogtag.textContent = "CHEESY";
    
    // create a node for the 2nd biggest font
    const esetag = document.createElement('div');
    esetag.textContent = "Tasty";
    util.insertChildren(taglineContainer, [firstTag, secondTag, dogtag, esetag]);   
    return taglineContainer;
}


// create description
function createDescription(){
    // create container for description
    const desContainer = document.createElement('div');
    desContainer.className = "description-container";

    const description = document.createElement('div');
    description.className = "description";

    const descImage = new Image();
    descImage.src = bandf;
    descImage.setAttribute('align','left');
    descImage.className = 'desc-image';

    const descText = document.createElement('p');
    descText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
        Donec ipsum diam, convallis bibendum laoreet at, vestibulum sed sem. \
        Praesent a elit ultricies, bibendum erat ac, congue sem. \
        Interdum et malesuada fames ac ante ipsum primis in faucibus.\
        Aenean auctor fringilla enim at tristique. Ut efficitur sollicitudin eros eu blandit.\
        Cras consectetur ut ante at pellentesque. Phasellus suscipit, ipsum at hendrerit iaculis, ligula urna faucibus eros, eget aliquet quam metus ut justo.\
        Quisque in porta ipsum. Ut at felis mi. In scelerisque tempor massa. Aenean lectus dui, convallis quis neque nec, malesuada dictum ipsum.\
        Nunc orci orci, rhoncus porta ante ac, feugiat accumsan risus. Nunc tincidunt mauris vel aliquam fermentum.";
    descText.className = 'desc-text';
    const btnContainer = document.createElement('div');
    btnContainer.className = 'desc-btn';
    const descBtn = document.createElement('button');
    descBtn.textContent = "Order Now";
    descBtn.className = 'btn';
    const btnImg = new Image();
    btnImg.src = ok;
    btnImg.className = 'btn-image';
    btnContainer.onclick = () => {
        util.setCurrent('menu');
        createMenu();
    }

    util.insertChildren(btnContainer, [btnImg, descBtn]);
    util.insertChildren(description, [descImage, descText, btnContainer]);
    desContainer.appendChild(description);
    return desContainer;
}

// new create Schedule
function createSchedule(){
    const scheduleContainer = document.createElement('div');
    scheduleContainer.className = "schedule-container";

    const logo = document.createElement('div');
    logo.className = "material-icons-sharp sched-logo"
    logo.textContent = "schedule"
    const schedOneCont = document.createElement('div');
    const schedOne = document.createElement('h1');
    schedOne.className = "sched-one";
    schedOneCont.className = "open";
    util.insertChildren(schedOneCont, [logo, schedOne]);

    const schedTwoCont = document.createElement('div');
    const schedTwo = document.createElement('h1');
    schedTwo.className = "sched-two";
    schedTwoCont.className = "open";
    util.insertChildren(schedTwoCont, [logo.cloneNode(true), schedTwo]);

    const schedTreeCont = document.createElement('div');
    const schedTree = document.createElement('h1');
    schedTree.className = "sched-tree";
    schedTreeCont.className = "closed";
    util.insertChildren(schedTreeCont, [logo.cloneNode(true), schedTree]);

    util.insertChildren(scheduleContainer, [schedOneCont, schedTwoCont, schedTreeCont]);
    return scheduleContainer;
}
function createHome(){
    const content = util.createContainer('main');

    //create a wide div for feature food
    const featured = document.createElement('div');
    featured.className = "featured";
    window.onresize = () => {
        util.nodeResize(featured, '160vw' , '130vw');
    };

    util.nodeResize(featured, '160vw' , '130vw');
    util.insertChildren(featured, [createTagline()]);
    util.insertChildren(content,[featured, createSchedule(), createDescription()])
    util.insertTo(content, 'main-container');
    return 'home';
}

export default createHome;