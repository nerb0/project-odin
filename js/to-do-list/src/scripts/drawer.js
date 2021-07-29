
import {startCase} from 'lodash'
import * as util from './util.js';
import * as todo from './todo.js';


// changing tab in the drawer
function changeTab(node, listType, from){
    const prev = document.getElementsByClassName('tab-current');
    if(prev[0] != node){
        if(prev[0])prev[0].classList.remove('tab-current');
        const tasks = todo.showTasks(listType, from);
        if(from){
            util.setValue('input-project-name', from);
            document.getElementById('input-project-name').classList.add('unselectable');
        }else{
            util.setValue('input-project-name', '');
            document.getElementById('input-project-name').classList.remove('unselectable');
        }

        document.getElementById('task-container').appendChild(tasks);
        node.classList.add('tab-current');
    }
    
}

// create tab nodes for the project list
function createProjectTab(id){
    const tab = document.createElement('div');
    tab.textContent = id;
    tab.id = `${id}`;
    tab.className = "tab-projects-list";
    tab.onclick = function(){
        if(!tab.classList.contains("tab-current")){
            changeTab(tab, 'projects', tab.id);
        }
    } 
    return tab;
}

// initialize listofprojects
function listProjects() {
    const container = util.replace("projects-list-container");
    const projects = todo.showProjects();
    for(let key in projects){
        if(key != 'Inbox'){
            const tab = createProjectTab(key);
            container.appendChild(tab);
        }
    }
    return container;
}

// create a form for adding projects
function createForm(){
    const container = util.createContainer('project-form', 'form');
    container.setAttribute("action", "javascript:void(0)");
    container.setAttribute("autocomplete", "off");
    
    const name = util.createInput('new-project-name', 'input','input-form');
    const desc = util.createInput('new-project-description', 'textarea','input-form');
    const color = document.createElement('input');
    color.type = 'color';
    const submit = document.createElement('button');
    submit.textContent = "Add Project";
    submit.type = "submit";
    container.onclick = (e) => {e.stopPropagation();}

    window.addEventListener('click', (e) => {
        if(e.target != container){
            if(container.classList.contains('visible')){
                util.toggleDisplay(container.id);
            }
        }
    })
    container.onsubmit = () => {
        util.toggleDisplay(container.id);
        const value = _.startCase(_.toLower(document.getElementById('input-new-project-name').value));
        addProject(value);
        container.reset();
    }

    util.insertChildren(container, [name, desc, color, submit])
    return container;
}
// create node for the adding projects button
function createAddProjectsBtn(parent) {
    const container = util.createContainer('add-project');
    const button = document.createElement('button')
    button.className = "material-icons-round add-project-btn"
    button.textContent = "add";
    
    container.onclick = (e) => {
        e.stopPropagation();
        changeTab(parent, 'projects');
        button.classList.toggle('active-project-btn')
        util.toggleDisplay('project-form-container');
    }

    container.appendChild(button)
    return container;
}
function addProject(name){
    if(todo.createProject(name))
        document.getElementById('projects-list-container').appendChild(createProjectTab(name));
    else
        console.log('wawaw');
}


// create the button to open/close the drawer
function createButton(){
    const container = document.createElement('a')
    container.id = "drawer-btn-container"
    const button = document.createElement('span')
    button.id = "drawer-btn"
    button.className = "drawer-btn"

    container.appendChild(button)
    container.onclick = () => {
        util.toggleDisplay('overlay');
        
        const main = document.getElementById('drawer-container');
        button.classList.toggle('opened');
        main.classList.toggle("opened-container")
    }
    return container
}

// function for creating tabs in the drawer
function createTab(name, text = name){
    const container = util.createContainer(name)
    container.className = "tab-container"
    const logo = document.createElement('div');
    logo.className = "material-icons-round tab-logo";
    logo.id = `logo-${name}`
    const tab = document.createElement('div');
    tab.id = `tab-${name}`
    tab.className = `drawer-tab`
    tab.textContent = `${startCase(text)}`

    util.insertChildren(container, [logo,tab])
    return container;
}


function createDrawer() {
    const container = util.createContainer('inner-drawer');
    const tabs = document.createElement('div');
    tabs.id = "drawer-tab-container"

    const all = createTab('all');
    all.classList.add('tab-current');
    const inbox = createTab('inbox');
    const today = createTab('today');
    const week = createTab('this-week', 'this week');
    const projects = createTab('projects');
    util.insertChildren(projects,[createAddProjectsBtn(projects), createForm()]);

    all.onclick = function(){changeTab(this)};
    inbox.onclick = function(){changeTab(this, true, 'Inbox')};
    projects.onclick = function(){changeTab(this, true)};

    util.insertChildren(tabs, [all,inbox,today, week, projects])
    util.insertChildren(container, [createButton(),tabs, listProjects()])
    return container;
}

export default createDrawer;
export {createProjectTab}