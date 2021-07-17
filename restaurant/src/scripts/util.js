
let current = 'home';
let linkList = {};
const setCurrent = (curr) => {
    current = curr;
}
const setlinkList = (values) => {
    linkList = values;
}
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