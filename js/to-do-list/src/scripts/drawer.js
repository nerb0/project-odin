
import {startCase} from 'lodash'
import * as util from './util.js';
import * as todo from './todo.js';

function changeTab(node, listType, from){
    const prev = document.getElementsByClassName('tab-current');
    if(prev[0])prev[0].classList.remove('tab-current');     
    const tasks = todo.showTasks(listType, from);
    document.getElementById('task-container').appendChild(tasks);
    node.classList.add('tab-current');
}

function listProjects() {
    const container = util.createContainer("projects-list");
    const projects = todo.showProjects();
    for(let key in projects){
        const tab = document.createElement('div');
        tab.textContent = key;
        tab.id = `${key}`;
        tab.className = "tab-projects-list";
        tab.onclick = function(){
            if(!tab.classList.contains("tab-current")){
                changeTab(tab, 'projects', tab.id);
            }
        } 
        container.appendChild(tab);
    }
    return container;
}

function createForm(){
    const container = util.createContainer('project-form');
    const name = util.createInput('new-project-name', 'input','input-form');
    const desc = util.createInput('new-project-description', 'textarea','input-form');
    const color = document.createElement('input');
    color.type = 'color';


    util.insertChildren(container, [name, desc, color])
    return container;
}

function createButton(){
    const container = document.createElement('a')
    container.id = "drawer-btn-container"
    const button = document.createElement('span')
    button.id = "drawer-btn"
    button.className = "drawer-btn"

    container.appendChild(button)
    container.onclick = () => {
        const main = document.getElementById('drawer-container');
        button.classList.toggle('opened');
        main.classList.toggle("opened-container")
    }
    return container
}

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
    projects.appendChild(createForm());

    all.onclick = function(){changeTab(this)};
    inbox.onclick = function(){changeTab(this, 'inbox', 'Inbox')};
    projects.onclick = function(){changeTab(this, 'projects')};

    util.insertChildren(tabs, [all,inbox,today, week, projects])
    util.insertChildren(container, [createButton(),tabs, listProjects()])
    return container;
}

export default createDrawer;