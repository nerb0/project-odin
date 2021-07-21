
import {startCase} from 'lodash'
import * as util from './util.js';

function createForm(){
    const container = util.createContainer('project-form');
    const name = util.createInput('new-project-name', 'input','project-input');
    const desc = util.createInput('new-project-description', 'input','project-input');
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
        console.log(main)
        button.classList.toggle('opened');
        main.classList.toggle("opened-container")
    }
    return container
}

function createTab(name, text = name){
    const container = util.createContainer('div')
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

    const inbox = createTab('inbox');
    const today = createTab('today');
    const week = createTab('this-week', 'this week');
    const projects = createTab('projects');
    projects.appendChild(createForm());

    util.insertChildren(tabs, [inbox,today, week, projects])
    util.insertChildren(container, [createButton(),tabs])
    return container;
}

export default createDrawer;