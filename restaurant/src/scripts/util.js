
let current = 'home';   // Implies the current active tab
let linkList = {};      // container for the tab link nodes

// set method for current
const setCurrent = (curr) => current = curr;    

// set method for the list of tab links
const setlinkList = (values) => linkList = values;

// remove the active class on every nodes in an array of HTML elements
const removeActiveList = (arr) =>{
    arr.forEach((node) => {
        node.classList.remove('active');
    })
}

export {
    current,
    linkList,
    setlinkList,
    setCurrent,
    removeActiveList
}