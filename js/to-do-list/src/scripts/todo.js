import {insertChildren, createContainer} from './util.js' 
import {last} from 'date-fns'
import {upperFirst} from 'lodash'

class Project{
    constructor(name, list){
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


const createTaskNode = (_task) => {
    const container = createContainer(`task-${_task.id}`, 'li');
    container.className = "task-node";
    const title = document.createElement('p');
    title.textContent = upperFirst(_task.title);
    const description = document.createElement('div');
    description.className = "task-description";
    description.textContent = _task.description;
    const deadline = document.createElement('p');
    deadline.textContent = _task.dueDate;
    const project = document.createElement('p');
    project.textContent = _task.project;

    insertChildren(container, [title, project, deadline, description ]);
    container.onclick = (event) => {
        event.stopPropagation();
        const prev = document.getElementsByClassName('expanded');
        if(prev[0]) 
           prev[0].classList.remove("expanded");
        else container.classList.add("expanded");
    }
    return container;
}
const displayTasks = (container) =>{
    List.getList().forEach((_task) => {
        container.appendChild(createTaskNode(_task))
    })
}


const List = (() => {
    let _list = [
        new Task("one", "asdasda", "20/20/20", 1, 1),
        new Task("two", "asdasda", "20/20/21", 2, 2),
        new Task("three", "asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda", "20/20/22", 3, 3),
        new Task("four", "asdasda", "20/20/23", 4, 4),
    ];
    const addToList = (_task) => {
        _task.id = last(_list).id
        _list.push(_task);
    }
    const remove = (index) => {
        _list.splice(index, 1)
    }
    const getList = () =>{
        return _list;
    }
    return{
        addToList,
        remove,
        getList,
    }
})();





function createTask(title, description, dueDate, priority){
    const _task = new Task(title, description, dueDate, priority);
    List.addToList(_task);
    return createTaskNode(_task);
}



export{
    createTask,
    displayTasks
}