
let projects = new List();
let tasks = new List();

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

function List(){
    let _list = [];
    function addToList() {
        for(let _task of [...arguments]){
            _list.push(_task);
        }
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
};

function createTask(){

}



export{
    createTask,
}