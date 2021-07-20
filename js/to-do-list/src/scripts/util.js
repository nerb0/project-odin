
function toggleDisplay(id){
    const node = document.getElementById(id);
    if(node.style.visibility == 'hidden') {
        node.style.visibility = "visible";
        node.style.opacity = "1";
    }else{
        node.style.visibility = "hidden";
        node.style.opacity = "0";
    }
}

function createContainer(name, tag = 'div'){
    const container = document.createElement(tag);
    container.id = `${name}-container`;
    return container
}

// create input with moving label by using pseudo-element ::after
function createInput(name, tag, className, _id, type = "text"){
    // container is needed for reference to the position of the pseudo-element ::after
    const container = document.createElement('div');

    // any input type node can't have pseudo elements
    const input = document.createElement(tag);
    input.id = `input-${name}`;
    input.className = className;
    input.setAttribute("type", type);
    input.setAttribute("required", "");
    input.addEventListener('change', function(){
        input.setAttribute("value", this.value)
    });
    // this allows ::after pseudo-elements
    const temp = document.createElement("div");
    
    //insert the created node to the container
    if(_id)  container.id = `${_id}-container`
    container.style.position = "relative";
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
}