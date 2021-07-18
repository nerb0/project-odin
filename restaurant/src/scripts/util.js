

// remove the active class on every nodes in an array of HTML elements
const removeActiveList = (arr) =>{
    arr.forEach((node) => {
        node.classList.remove('active');
    })
}
const checkViewport = (node) => {
    if(window.innerWidth < 700) node.style.display = "none";
    else node.style.display = "block";
    
    window.onresize = () => {
        if(window.innerWidth < 700) node.style.display = "none";
        else node.style.display = "block";
    }
}
const insertToMain = (content) => {
    document.getElementById('main-container').appendChild(content);
}


export {
    insertToMain,
    removeActiveList,
    checkViewport
}