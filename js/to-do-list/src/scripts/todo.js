import {insertChildren, createContainer, replace} from './util.js' 
import {kebabCase,upperFirst, last} from 'lodash'
import { addDays, differenceInDays, format, formatRelative, parseISO } from 'date-fns';


const colors = {
    "Inbox": "#e0e0e0",
    "First Project": "red",
    "Second Project": "blue",
}
class Project{
    constructor(name, list = {}){
        this.name = name;
        this.list = list;
    }
    get name(){
        return this._name;
    }
    get list(){
        return this._list;
    }
    set name(newName) {
        this._name = newName;
    }
    set list(newList) {
        this._list = newList;
    }
}

class Task{
    constructor(title, description, dueDate, priority, status){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status; // -1 = incomplete/ 0 = ongoing / 1 = complete
    }
    get title(){
        return this._title;
    }
    get status(){
        return this._status;
    }
    get description(){
        return this._description;
    }
    get dueDate(){
        return this._dueDate;
    }
    get priority(){
        return this._priority;
    }
    get id(){
        return this._id;
    }
    set status(newStatus){
        this._status = newStatus;
    }
    set id(newId){
        this._id = newId;
    }
    set title(newTitle){
        this._title = newTitle;
    }
    set description(newDesc){
        this._description = newDesc;
    }
    set dueDate(newDate){
        this._dueDate = newDate;
    }
    set priority(newPrio){
        this._priority = newPrio;
    }
}

const createHeader = (from) => {
    const project = createContainer(from);
    const header = document.createElement('div');
    header.className = "task-header";
    header.textContent = from;
    header.style.borderColor = colors[from];
    project.appendChild(header);
    
    return project;
}

// create the node for each task;
const createTaskNode = (_task, from, id) => {
    // assign unique id to the task with respect to their project (parent)?
    const container = createContainer(`${kebabCase(from)}-${id}`, 'li'); 
    container.className = "task-node";
    container.setAttribute('data-from', from);
    container.setAttribute('data-index', id);


    // Node for checkbox
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'task-checkbox'
    check.setAttribute('data-task',container.id);
    // toggling status
    check.onclick = (e) =>{
        e.stopPropagation()
        if(_task.status == 1) _task.status = 0;
        else _task.status = 1;
        container.classList.toggle('task-over');
    }

    // Node for task title
    const title = document.createElement('p');
    title.textContent = upperFirst(_task.title);

    // Node for task description
    const description = document.createElement('div');
    description.className = "task-description";
    description.textContent = _task.description;

    // Node for task deadline
    const deadline = document.createElement('p');
    deadline.textContent = formatRelative( parseISO(_task.dueDate), new Date(), {unit:'day'});

    /// set the status to incomplete if task is ongoing and past the deadline
    if(differenceInDays( parseISO(_task.dueDate), new Date()) < 0 && _task.status == 0){
        _task.status = -1; 
        container.classList.add('task-incomplete');
    }
    // set the class for container to have strikethrough if task is complete or incomplete
    if(_task.status == -1 || _task.status == 1){
        container.classList.add('task-over');
        if(_task.status == 1) check.checked = true;
        else container.classList.add('task-incomplete');
    }
    
    
    insertChildren(container, [check,title, deadline, description ]);
    // expanding a task 
    container.onclick = (event) => {
        event.stopPropagation();
        const prev = document.getElementsByClassName('expanded');
        if(prev[0]) 
           prev[0].classList.remove("expanded");
        else container.classList.add("expanded");
    }
    return container;
}

const displayTasks = (container, specific = false, from) =>{
    const lists = List.getList(); 
    const project = createHeader(from);
    if(specific){
        // list the tasks from all the projects
        if(from){ // list the tasks from a specific project
            for(let task in lists[from].list){
                project.appendChild(createTaskNode(lists[from].list[task], from, task));
            }
            container.appendChild(project);
        }
        else{
            for(let key in lists){ // list all the tasks from project
                if(key != 'Inbox'){
                    const project = createHeader(key);
                    for(let task in lists[key].list){
                        project.appendChild(createTaskNode(lists[key].list[task], key, task))
                    }
                    container.appendChild(project);
                }
            }
        }
    }
    else{
        /* TODO:: Filter the task to enable 
        flexibility for sorting and filtering */

        for(let key in lists){ // list all the tasks
            const project = createHeader(key);
            for(let task in lists[key].list){
                project.appendChild(createTaskNode(lists[key].list[task], key, task));
            }
            container.appendChild(project)
        }
    } 
}

const List = (() => {
    let _lists = localStorage.getItem('list');

    // localStorage
    if(_lists){
        _lists = JSON.parse(_lists);
        for(let project in _lists){
            Object.setPrototypeOf(_lists[project], Project.prototype.constructor.prototype)
            for(let task in _lists[project].list){
                Object.setPrototypeOf(_lists[project].list[task], Task.prototype.constructor.prototype)
            }
        }
    }else{
        _lists = {
            "Inbox": new Project("Inbox", {
            1: new Task("Inbox", "asdasda", format(addDays(new Date(), -1),'yyyy-MM-dd'), 1, 0),
            2: new Task("Inbox", "asdasda",  format(addDays(new Date(), -2),'yyyy-MM-dd'), 1, 1)
            }),
            "First Project" : new Project("First Project", {
                1: new Task("one", "asdasda", format(new Date(),'yyyy-MM-dd'), 1, 1),
                2: new Task("two", "asdasda",  format(addDays(new Date(), 21),'yyyy-MM-dd'), 2, 0),
                3: new Task("three", "asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda",  format(addDays(new Date(), 3),'yyyy-MM-dd'), 3, 0),
                4: new Task("four", "asdasda",  format(new Date(),'yyyy-MM-dd'), 4, 0)
            }),
            "Second Project" : new Project("Second Project", {
                1: new Task("awre", "asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda",  format(addDays(new Date(), 2),'yyyy-MM-dd'), 3, 0),
                2: new Task("four", "asdasda",  format(addDays(new Date(), 5),'yyyy-MM-dd'), 4, 0)
            }),
        }
        localStorage.setItem('list', JSON.stringify(_lists));
    }
    console.log(_lists)
    const updateStorage = () => {
        localStorage.setItem('list', JSON.stringify(_lists));
    }
    const addToList = (_task,from) => {
        if(_lists[from]){
            let key = last(Object.keys(_lists[from].list));
            if(!key) key = 0;
            _lists[from].list[++key] = _task;
            updateStorage();
            return {key};
        }
        else{
            _lists[from] = new Project(from);
            _lists[from].list[0] = _task;
            updateStorage();
            return false;
        }
    }
    const addProject = (name) => {
        if(_lists[name]) return false;
        else{
            _lists[name] = new Project("name", []);
            updateStorage();
            return true;
        }
    }
    const remove = (index) => {
        _list.splice(index, 1)
        updateStorage();
    }
    const getList = () =>{
        return _lists;
    }
    return{
        addToList,
        remove,
        getList,
        addProject,
    }
})();

function showTasks(listType, from){
    const main = replace('tasks') // container for the tasks
    displayTasks(main, listType, from);
    return main
}
 
function showProjects(){
    return List.getList();
}

function createTask(title, description, dueDate, priority, project){
    const _task = new Task(title, description, dueDate, priority, 0);
    let node;
    const res = List.addToList(_task, project);
    console.log(res.key)
    if(!res){
        node = createHeader(project);
        node.appendChild(createTaskNode(_task, project, 0));
    }
    else node = createTaskNode(_task, project, res.key);
    return node;
}

function createProject(name){
    return List.addProject(name);
}

export{
    createTask,
    showTasks,
    showProjects,
    createProject
}