import {insertChildren, createContainer, replace} from './util.js' 
import {kebabCase,upperFirst, last, toLower, startCase} from 'lodash'
import { addDays, differenceInDays, format, formatRelative, isToday, parseISO } from 'date-fns';

/* 
for checking duplicate color
const colors = {
    "#e0e0e0": '',
    "red": '',
    "blue" : '',
}
 */
class Project{
    constructor(name, color, list = {}){
        this.name = name;
        this.list = list;
        this.color = color;
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
    
    if(from) header.style.borderColor = List.getList()[from].color;
    if(from != 'Inbox'){
        const button = createTaskBtn('delete');
        button.id = from;
        button.onclick = () => {
            List.remove(from); // remove from localStorage
            project.remove(); // remove project's task container
            document.getElementById(from).remove(); // remove project tab
        }
        header.appendChild(button)
    }
    
    project.appendChild(header);
    
    return project;
}

const createTaskBtn = (name) => {
    const button = document.createElement('button');
    button.className = `task-${name}`;
    const text = document.createElement('span');
    text.className = `${name}-task-btn material-icons-round`;
    text.textContent = name;

    button.appendChild(text);
    return button;
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
        _task.status = !_task.status;
        container.classList.toggle('task-over');
    }

    // Node for task title
    const title = document.createElement('p');
    title.className = "task-title";
    title.textContent = upperFirst(_task.title);

    // Node for task deadline
    const deadline = document.createElement('p');
    deadline.className = "task-deadline";
    deadline.textContent = formatRelative( parseISO(_task.dueDate), new Date(), {unit:'day'});

    // Node for task description
    const description = document.createElement('div');
    description.className = "task-description";
    description.textContent = _task.description;


    /// set the task to unselectable if task is past the deadline
    if(differenceInDays( parseISO(_task.dueDate), new Date()) < 0){
        if (_task.status == 0)_task.status = -1; // set the status to incomplete if task is ongoing
        container.classList.add('task-no-more'); // set the task inputs and buttons to be unselectable
    }
    // set the class for container to have strikethrough if task is complete or incomplete
    if(_task.status == -1 || _task.status == 1){
        container.classList.add('task-over');
        if(_task.status == 1) check.checked = true;
    }
    
    const taskBtns = document.createElement('div');
    taskBtns.className = "task-buttons";
    taskBtns.onclick = (e) => e.stopPropagation();
    const editTask = createTaskBtn('edit');
    editTask.onclick = function(){
        if(!container.classList.contains('on-edit-task')){ // replace task nodes to be input
            const titleInput = document.createElement('input');
            titleInput.className = "task-title";
            titleInput.setAttribute('maxlength', "50");
            titleInput.setAttribute('value', _task.title);
    
            const dateInput = document.createElement('input');
            dateInput.className = "task-deadline";
            dateInput.setAttribute('type', 'date');
            dateInput.setAttribute('min', format(new Date(), "yyyy-MM-dd"));
            dateInput.setAttribute('value', _task.dueDate);
            dateInput.setAttribute('required', '');
    
            const descInput = document.createElement('textarea');
            descInput.textContent =  _task.description;
            descInput.className = "task-description"; 
            descInput.setAttribute('maxlength', "250");
    
            [titleInput, descInput, dateInput].forEach((node) => 
                node.onclick = (e) => e.stopPropagation()
            );
            container.replaceChild(titleInput,  container.children[1]);
            container.replaceChild(dateInput, container.children[2]);
            container.replaceChild(descInput, container.children[3]);
            editTask.children[0].textContent = 'check';
        }else{ // replace input nodes to be normal node and update localStorage
            const _title = startCase(toLower(container.children[1].value));
            const _dueDate = container.children[2].value;
            const _description = container.children[3].value;
            List.editTask(_task, _title, _dueDate, _description);

            title.textContent = _task.title;
            deadline.textContent = _task.dueDate;
            description.textContent = _task.description;
    
            container.replaceChild(title, container.children[1]);
            container.replaceChild(deadline,container.children[2]);
            container.replaceChild(description, container.children[3]);
            editTask.children[0].textContent = 'edit';
        }
        container.classList.toggle('on-edit-task');
    }
    const deleteTask = createTaskBtn('delete');
    deleteTask.onclick = () => {
        container.remove();
        List.remove(from, id);
    }
    insertChildren(taskBtns, [editTask, deleteTask]);

    insertChildren(container, [check,title, deadline, description, taskBtns ]);
    // expanding a task 
    container.onclick = (event) => {
        event.stopPropagation();
        const prev = document.getElementsByClassName('expanded');
        if(prev[0]) {
            prev[0].classList.remove("expanded");
        }
        else container.classList.add("expanded");
        
    }
    return container;
}

// TODO:: FILTER TASK by date and sort
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
    if(_lists){ // load the local storage list
        _lists = JSON.parse(_lists);
        for(let project in _lists){
            Object.setPrototypeOf(_lists[project], Project.prototype.constructor.prototype)
            for(let task in _lists[project].list){
                Object.setPrototypeOf(_lists[project].list[task], Task.prototype.constructor.prototype)
            }
        }
    }else{ // load default list on first load
        _lists = {
            "Inbox": new Project("Inbox", "#e0e0e0", {
            1: new Task("Inbox", "asdasda", format(addDays(new Date(), -1),'yyyy-MM-dd'), 1, 0),
            2: new Task("Inbox", "asdasda",  format(addDays(new Date(), -2),'yyyy-MM-dd'), 1, 1)
            }),
            "First Project" : new Project("First Project", "red", {
                1: new Task("One", "asdasda", format(new Date(),'yyyy-MM-dd'), 1, 1),
                2: new Task("Two", "asdasda",  format(addDays(new Date(), 21),'yyyy-MM-dd'), 2, 0),
                3: new Task("Three", "asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda",  format(addDays(new Date(), 3),'yyyy-MM-dd'), 3, 0),
                4: new Task("Four", "asdasda",  format(new Date(),'yyyy-MM-dd'), 4, 0)
            }),
            "Second Project" : new Project("Second Project", "blue", {
                1: new Task("Awre", "asdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasdaasdasda",  format(addDays(new Date(), 2),'yyyy-MM-dd'), 3, 0),
                2: new Task("Four", "asdasda",  format(addDays(new Date(), 5),'yyyy-MM-dd'), 4, 0)
            }),
        }
        localStorage.setItem('list', JSON.stringify(_lists));
    }
    // update the whole lists in the storage since I didn't add project variable on tasks
    const updateStorage = () => {
        localStorage.setItem('list', JSON.stringify(_lists));
    }

    // adding tasks to list
    const addToList = (_task,from) => {
        if(_lists[from]){ // if project is existing
            let key = last(Object.keys(_lists[from].list));
            if(!key) key = 0;
            _lists[from].list[++key] = _task;
            updateStorage();
            return {key};
        }
        else{ // if it is not; create new project
            _lists[from] = new Project(from);
            _lists[from].list[0] = _task;
            updateStorage();
            return false;
        }
    }
    const editTask = (_task, title, dueDate, description) => {
        _task.title = title;
        _task.dueDate = dueDate;
        _task.description = description;
        updateStorage();
    }
    // adding projects to list
    const addProject = (name, color) => {
        if(_lists[name]) return false;
        else{
            _lists[name] = new Project("name", color);
            updateStorage();
            return true;
        }
    }

    const remove = (from, id) => {
        if(id) delete _lists[from].list[id];
        else delete _lists[from];
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
        editTask,
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
    // if task is from a new project
    if(!res){
        node = createHeader(project);
        node.appendChild(createTaskNode(_task, project, 0));
    }
    else node = createTaskNode(_task, project, res.key);
    return node;
}

function createProject(name, color){
    return List.addProject(name, color);
}

export{
    createTask,
    showTasks,
    showProjects,
    createProject
}