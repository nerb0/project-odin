import * as util from './util.js';
import * as todo from './todo.js';
import {createProjectTab} from './drawer.js'
import { format } from 'date-fns';


function addTasks(){
    const title = _.startCase(_.toLower(document.getElementById('input-title').value));
    const description = document.getElementById('input-description').value;
    const deadline = document.getElementById('input-deadline').value;
    const priority = document.getElementById('input-priority').value;
    const project = _.startCase(_.toLower(document.getElementById('input-project-name').value));
    
    const task =  todo.createTask(title, description, deadline, priority, project);
    const container = document.getElementById(`${project}-container`);

    // checks if the user input is an existing project
    if(container) container.appendChild(task);
    // if it is a new project then
    else { 
        // task variable contains a header if it is a new project
        document.getElementById('tasks').appendChild(task);
        document.getElementById('projects-list-container').appendChild(createProjectTab(project));// updates the projects list in the drawer
    }
}



// create the node for the adding task FORM
function createTaskForm(){
    
    const container = util.createContainer('task-form', "form");
    container.setAttribute("action", "javascript:void(0)");
    container.setAttribute("autocomplete", "off");
    container.onsubmit = () => {
        util.toggleDisplay('task-form-container');
        util.toggleDisplay('overlay');
        addTasks();
        container.reset();
    }

    const title = util.createInput('title', 'input', "input-form");
    const description = util.createInput("description","textarea", "input-form", "description");
    const deadline = util.createInput("deadline", "input", "input-form", 'date', 'date', format(new Date(), "yyyy-MM-dd"));
    const priority = util.createInput("priority", "input", "input-form", "priority", "number", '0'); 
    const dual = document.createElement("div");
    dual.id = "dual-input";
    const project = util.createInput("project-name", "input", "input-form");
    const submit  = document.createElement("button");
    submit.id = "btn-add-task"
    submit.textContent = "ADD";
    submit.type = "submit";
    
    
    util.insertChildren(dual, [deadline, priority]);
    util.insertChildren(container, [project,title, description, dual, submit]);

    container.onclick = (e) => e.stopPropagation();

    return container;
}

// create the node for the adding task BUTTON
function createAddTask(){
    const container = util.createContainer('add-task');
    const addBtn = document.createElement('button');
    addBtn.textContent = "Add a task";
    addBtn.id = "add-task-btn";
    addBtn.className = "btn add-task-btn";
    addBtn.onclick = () => {
        util.toggleDisplay('task-form-container');
        util.toggleDisplay('overlay');
    }
    window.addEventListener('click', (e) => {
        const form = document.getElementById("task-form-container");
        if(e.target != form && e.target != addBtn){
            if(form.classList.contains('visible')){
                util.toggleDisplay('task-form-container');
                util.toggleDisplay('overlay');
            }
        }
        const expanded = document.getElementsByClassName("expanded")[0];
        if(expanded) {
            expanded.classList.remove("expanded");
        }
    })
    util.insertChildren(container, [addBtn]);
    
    return container
}

// create the nodes for the tasks LIST
function initializeTasks(){
    const container = util.createContainer('task','div');
    util.insertChildren(container, [ todo.showTasks()]);
    return container;
}

// create the container for the contents
function createHome(){
    const legendContainer = util.createContainer('legend', 'div');
    
    const main = document.createElement("div");
    main.id = "main";
    
    util.insertChildren(
        main, 
        [legendContainer, createAddTask(), initializeTasks()]
    );
    document.getElementById("main-container").appendChild(main);
    document.getElementById("overlay").appendChild(createTaskForm());

}   

export default createHome