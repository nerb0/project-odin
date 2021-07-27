import * as util from './util.js';
import * as todo from './todo.js'
import { sub } from 'date-fns';


function addTasks(){
    const title = document.getElementById('input-title').value;
    const description = document.getElementById('input-description').value;
    const deadline = document.getElementById('input-deadline').value;
    const priority = document.getElementById('input-priority').value;
    const project = document.getElementById('input-project-name').value;
    
    const task =  todo.createTask(title, description, deadline, priority, project);
    document.getElementById(`${project}-container`).appendChild(task);
}



// create the node for the adding task form
function createTaskForm(){
    const container = util.createContainer('task-form', "form");
    container.setAttribute("action", "javascript:void(0)");
    container.style.visibility = "hidden";
    container.setAttribute("autocomplete", "off");
    container.onsubmit = () => {
        util.toggleDisplay('task-form-container');
        addTasks();
        container.reset();
    }

    const title = util.createInput('title', 'input', "input-form");
    const description = util.createInput("description","textarea", "input-form", "description");
    const deadline = util.createInput("deadline", "input", "input-form", 'date');
    const priority = util.createInput("priority", "input", "input-form", "priority", "number");
    const dual = document.createElement("div");
    dual.id = "dual-input";
    const project = util.createInput("project-name", "input", "input-form");
    const submit  = document.createElement("button");
    submit.id = "btn-add-task"
    submit.textContent = "ADD";
    submit.type = "submit";
    
    
    util.insertChildren(dual, [deadline, priority]);
    util.insertChildren(container, [project,title, description, dual, submit]);
    return container;
}

// create the node for the adding task button
function createAddTask(){
    const container = util.createContainer('add-task');
    const form = createTaskForm()
    

    const addBtn = document.createElement('button');
    addBtn.textContent = "Add a task";
    addBtn.id = "add-task-btn";
    addBtn.className = "btn add-task-btn";
    addBtn.onclick = () => {
        util.toggleDisplay('task-form-container');
    }

    window.onclick = (e) => {
        if(e.target != form && e.target != addBtn){
            if(form.style.visibility == "visible"){
                util.toggleDisplay('task-form-container');
            }
        }
        const expanded = document.getElementsByClassName("expanded");
        if(expanded[0]) {
            expanded[0].classList.remove("expanded");
        }
    }
    form.onclick = (e) => e.stopPropagation();

    util.insertChildren(container, [form,addBtn]);
    
    return container
}

// create the nodes for the tasks
function initializeTasks(){
    const container = util.createContainer('task','div');
    util.insertChildren(container, [ todo.showTasks()]);
    return container
}

// create the container for the contents
function createHome(){
    const legendContainer = util.createContainer('legend', 'div');
    
    const main = document.createElement("div");
    main.id = "main"

    util.insertChildren(
        main, 
        [legendContainer, createAddTask(), initializeTasks()]
    );
    document.getElementById("main-container").appendChild(main);
    
}

export default createHome