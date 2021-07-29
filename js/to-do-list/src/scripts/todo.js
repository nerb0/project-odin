import {insertChildren, createContainer, replace} from './util.js' 
import {kebabCase,upperFirst, last} from 'lodash'
import { addDays, format, formatRelative, parseISO } from 'date-fns';


const colors = {
    "Inbox": "#e0e0e0",
    "First Project": "red",
    "Second Project": "blue",
}
class Inbox{
    constructor(list =[]){
        this.list = list;
    }
    get list(){
        return this._list;
    }
    set list(newList) {
        this._list = newList;
    }
}
class Project{
    constructor(name, list =[]){
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
    constructor(title, description, dueDate, priority, id){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = id;
    }
    get title(){
        return this._title;
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
const createTaskNode = (_task, from) => {
    // assign unique id to the task with respect to their project (parent)?
    const container = createContainer(`${kebabCase(from)}-${_task.id}`, 'li'); 
    container.className = "task-node";

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'task-checkbox'
    check.setAttribute('data-task',container.id);

    const title = document.createElement('p');
    title.textContent = upperFirst(_task.title);

    const description = document.createElement('div');
    description.className = "task-description";
    description.textContent = _task.description;

    const deadline = document.createElement('p');
    deadline.textContent = formatRelative( parseISO(_task.dueDate), new Date(), {unit:'day'});
    container.setAttribute('data-index', deadline.textContent);


    const project = document.createElement('p');
    project.textContent = _task.project;

    
    insertChildren(container, [check,title, deadline, description ]);
    container.onclick = (event) => {
        event.stopPropagation();
        const prev = document.getElementsByClassName('expanded');
        if(prev[0]) 
           prev[0].classList.remove("expanded");
        else container.classList.add("expanded");
    }
    return container;
}

const displayTasks = (container, listType, from) =>{
    const lists = List.getList(listType); 
    const project = createHeader(from);
    switch (listType) {
        case 'projects': // list the tasks from all the projects
            if(from){ // list the tasks from a specific project
                lists[from].list.forEach((_task) => {
                    project.appendChild(createTaskNode(_task, from));
                })
                container.appendChild(project);
            }
            else{
                for(let key in lists){
                    const project = createHeader(key);
                    lists[key].list.forEach((_task) => {
                        project.appendChild(createTaskNode(_task, key))
                    })
                    container.appendChild(project);
                }
            }
            break;
        case 'inbox':
            lists[from].list.forEach((_task) => {
                project.appendChild(createTaskNode(_task, from));
            })
            container.appendChild(project);
            break; 
        default:
            for(let all of lists){
                for(let key in all){        
                    const project = createHeader(key);
                    all[key].list.forEach((_task) => {
                        project.appendChild(createTaskNode(_task, key));
                    })
                    container.appendChild(project)
                }
            }
            break;
    }  
}

const List = (() => {

    const inbox = {
        "Inbox": new Inbox([
            new Task("Inbox", "asdasda", format(addDays(new Date(), 1),'yyyy-MM-dd'), 1, 1),
            new Task("Inbox", "asdasda",  format(addDays(new Date(), 1),'yyyy-MM-dd'), 1, 1)
            ]),
    }
    const projects = {
        "First Project" : new Project("First Project", [
            //      name     description             date            date_format  prio  id           
            new Task("one", "asdasda", format(new Date(),'yyyy-MM-dd'), 1, 1),
            new Task("two", "asdasda",  format(addDays(new Date(), 21),'yyyy-MM-dd'), 2, 2),
            new Task("three", "asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda",  format(addDays(new Date(), 3),'yyyy-MM-dd'), 3, 3),
            new Task("four", "asdasda",  format(addDays(new Date(), 1),'yyyy-MM-dd'), 4, 4)
        ]),
        "Second Project" : new Project("Second Project", [
            new Task("awre", "asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda",  format(addDays(new Date(), 2),'yyyy-MM-dd'), 3, 3),
            new Task("four", "asdasda",  format(addDays(new Date(), 5),'yyyy-MM-dd') , 4, 4)
        ]),
    }

    const addToList = (_task,from) => {
        if(projects[from]){
            _task.id = (last(projects[from].list))? 
                last(projects[from].list).id : 0;
            projects[from].list.push(_task);
            return true;
        }else if(from.toLowerCase() == 'inbox'){
            _task.id = last(inbox["Inbox"].list).id;
            inbox["Inbox"].list.push(_task);
            return true;
        }
        else{
            projects[from] = new Project(from, []);
            _task.id = 0;
            projects[from].list.push(_task);
            return false;
        }
    }
    const addProject = (name) => {
        if(projects[name]) return false;
        else{
            projects[name] = new Project("name", []);
            return true;
        }
    }
    const remove = (index) => {
        _list.splice(index, 1)
    }
    const getList = (from) =>{
        if(from){
            return (from == 'projects')? projects : inbox;
        }else{
            return [
                inbox,
                projects,
            ]
        }
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
    return List.getList('projects');
}

function createTask(title, description, dueDate, priority, project){
    const _task = new Task(title, description, dueDate, priority);
    let node;
    if(!List.addToList(_task, project)){
        node = createHeader(project);
        node.appendChild(createTaskNode(_task))
    }
    else node = createTaskNode(_task);
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