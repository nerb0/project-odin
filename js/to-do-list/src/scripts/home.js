import * as util from './util.js';
import * as todo from './todo.js'


function addTasks(){

}



// create the node for the adding task form
function createTaskForm(){
    const container = util.createContainer('task-form', "form");
    container.setAttribute("action", "javascript:void(0)");
    container.style.visibility = "hidden";
    container.setAttribute("autocomplete", "off");
    container.onsubmit = () => {
        util.toggleDisplay('task-form-container');
    }

    const title = util.createInput('title', 'input', "input-form");
    const description = util.createInput("description","textarea", "input-form", "description");
    const deadline = util.createInput("deadline", "input", "input-form");
    const priority = util.createInput("priority", "input", "input-form", "priority", "number");
    const last = document.createElement("div");
    last.id = "dual-input";
    const submit  = document.createElement("button");
    submit.textContent = "ADD";
    submit.type = "submit";
    
    
    util.insertChildren(last, [deadline, priority]);
    util.insertChildren(container, [title, description, last, submit]);
    return container
}

function createAddTask(){
    const container = util.createContainer('add-task');

    const addBtn = document.createElement('button');
    addBtn.textContent = "Add a task";
    addBtn.className = "btn add-task-btn";
    addBtn.onclick = () => {
        util.toggleDisplay('task-form-container');
    }

    util.insertChildren(container, [createTaskForm(),addBtn]);
    return container
}

function showTasks(){
    const container = util.createContainer('task');

    util.insertChildren(container, [ createAddTask()]);
    return container
}

function createHome(){
    const legendContainer = util.createContainer('legend', 'div');
    
    const main = document.createElement("div");
    main.id = "main"
    util.insertChildren(
        main, 
        [legendContainer,showTasks()]
    );
    document.getElementById("main-container").appendChild(main);
}

export default createHome