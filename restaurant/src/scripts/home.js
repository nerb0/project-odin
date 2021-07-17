import '../styles/style.css';
import '../styles/home.css';
import './util.js';

const DAYS = ['Sunday' ,'Monday' ,'Tuesday', 'Wednesday', 'Thursday' ,'Friday' ,'Saturday']

function createHome(){
    // remove the main content if there is
    const prev = document.getElementById('main');
    if(prev) prev.remove(); 

    // create new one
    const content = document.createElement('div');
    content.id = "main";
    content.className = "content";
    
    //create a wide div for feature food
    const featured = document.createElement('div');
    const featuredBg = document.createElement('div');
    featuredBg.className = "featured-bg";
    featured.className = "featured";

    // create a container for the tagline
    const taglineContainer = document.createElement('div')
    taglineContainer.className = "tagline-container"

    // create a node for the biggest font
    const firstTag = document.createElement('h1');
    firstTag.textContent = "CHONKY";

    // create a node for the 2nd biggest font
    const secondTag = document.createElement('h2');
    secondTag.textContent = "JUICY";

    // create a node for the 2nd biggest font
    const dogtag = document.createElement('h3');
    dogtag.textContent = "cheesy";
    
    // create a node for the 2nd biggest font
    const esetag = document.createElement('h4');
    esetag.textContent = "tasty";
    
    taglineContainer.appendChild(firstTag);
    taglineContainer.appendChild(secondTag);
    taglineContainer.appendChild(dogtag);
    taglineContainer.appendChild(esetag);

    /* 
        SCHEDULE
    */
    // create a container for schedule inside the featured div
    const scheduleContainer = document.createElement('div');
    scheduleContainer.className = "schedule-container";

    // create the schedule div
    const schedule = document.createElement('div');
    schedule.className = "schedule";
    // create the header for the schedule div
    const schedHeader = document.createElement('h3');
    schedHeader.textContent = "Schedule: ";
    schedHeader.className = "sched-header";

    // set-up the schedule table/grid inside the container
    const schedTable = document.createElement('div');
    schedTable.className = "sched-table"; 
    let schedTableElements = []; // in-case of emergency, use to manipulate node
    for(let i = 0; i < 21; i++){
        const node = document.createElement('div');
        schedTableElements.push(node);
        if(i%3 == 0) node.textContent = DAYS[i/3];
        else if(i%3 == 2) node.textContent = "OPEN";
        else node.className = "dotted"
        schedTable.appendChild(node);
    }
    // Append all necessary elements in order
    schedule.appendChild(schedHeader)
    schedule.appendChild(schedTable);
    scheduleContainer.appendChild(schedule);
    featured.appendChild(featuredBg);
    featured.appendChild(scheduleContainer);
    featured.appendChild(taglineContainer);

    // create container for description
    const description = document.createElement('div');
    description.className = "description";

    const profile = document.createElement('div');

    content.appendChild(featured)
    content.appendChild(description)
    document.getElementById('main-container').appendChild(content)
    return 'home';
}


export default createHome;