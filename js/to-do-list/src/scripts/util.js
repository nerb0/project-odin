
function setValue(id, value){
    document.getElementById(id).setAttribute('value', value);
}

function replace(id){
    const prev = document.getElementById(id);
    if(prev) prev.remove();
    const main = document.createElement('div');
    main.id = id;

    return main;
}

function toggleDisplay(id){
    const node = document.getElementById(id);
    node.classList.toggle('visible')
}

function createContainer(name, tag = 'div'){
    const container = document.createElement(tag);
    container.id = `${name}-container`;
    return container
}

// create input with moving label by using pseudo-element ::after
function createInput(name, tag, className, container_id, type = "text", defaultValue = ""){
    // container is needed for reference to the position of the pseudo-element ::after
    const container = document.createElement('div');

    // any input type node can't have pseudo elements
    const input = document.createElement(tag);
    input.id = `input-${name}`;
    input.className = className;
    input.setAttribute("value", defaultValue);
    input.setAttribute("min", defaultValue);
    input.setAttribute("type", type);
    input.setAttribute("required", "");
    
    // this allows ::after pseudo-elements
    const temp = document.createElement("div");
    
    if(container_id) container.id = `${container_id}-container`
    container.style.position = "relative";

    // insert the created node to the container
    insertChildren(container, [input, temp]);
    return container
}

/* 
function replace(container, node){
    if(container.firstChild) container.firstChild.remove();
    container.appendChild(node);
} 
*/

function insertChildren(parent, arr){
    arr.forEach(node => {
        parent.appendChild(node);
    });
}


export {
    createInput,
    createContainer,
    insertChildren,
    toggleDisplay,
    replace,
    setValue
}