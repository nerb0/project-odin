
const STATE = [ 'Not Started', 'Unfinished', 'Finished']

const booksTable = getNode("tbody#books");
const addBtn = getNode("#addBtn");
const bookForm = getNode("#addBookForm");
const bgOverlay = getNode("#overlay");
const current = getNode("#current");
const total = getNode("#total");
let library = [];
let max = 0;


function getNode(id){
    return document.querySelector(id);
}
function readLibrary(){
    /* 
    while(booksTable.firstChild){
        booksTable.firstChild.remove();
    } 
    */
    library.forEach((book) => {
        addToLibrary(book);
    });
}
function addToLibrary(book){
    const bookNode = document.createElement('tr');
    const name = document.createElement('td');
    const nameText = document.createElement('p');
    const author = document.createElement('td');
    const authorText = document.createElement('p');
    const curr_page = document.createElement('td');
    const pageInput = document.createElement('input');
    const addPage = document.createElement('button');
    const decPage = document.createElement('button');
    const totalPage = document.createElement('p');
    const status = document.createElement('td');
    const statusText = document.createElement('p');
    const buttons = document.createElement('td');
    const editBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    bookNode.id = `book${book.id}`;

    nameText.textContent = book.name; 
    nameText.setAttribute('data-index', `n${book.id}`); 
    authorText.textContent = book.author;
    authorText.setAttribute('data-index', `a${book.id}`); 
    decPage.className = 'page-btn minus';
    decPage.textContent = '<';
    decPage.setAttribute('data-index', book.id);
    decPage.onclick = function(){pageDown(this)};
    addPage.className = 'page-btn add';
    addPage.textContent = '>';
    addPage.setAttribute('data-index', book.id);
    addPage.onclick = function(){pageUp(this)};
    pageInput.setAttribute('type','number');
    pageInput.className = 'page';
    pageInput.setAttribute('value', book.currentPage);
    pageInput.setAttribute('max', book.totalPages);
    pageInput.setAttribute('min', 0);
    pageInput.setAttribute('data-index', book.id);
    pageInput.onchange = function(){changePage(this)};

    status.className = "status"
    statusText.className += 'status-text';
    statusText.setAttribute('data-index', book.id);
    status.setAttribute('data-index', book.id);

    editBtn.className = "edit book-btn material-icons";
    editBtn.textContent = 'edit';
    editBtn.setAttribute('data-index', book.id);
    editBtn.onclick = function(){editBook(this)};
    removeBtn.className = "remove book-btn material-icons";
    removeBtn.textContent = 'delete';
    removeBtn.setAttribute('data-index', book.id);
    removeBtn.onclick = function(){removeBook(this)};

    if(book.status == STATE[2]) {
        bookNode.style.borderLeft = '10px solid rgb(44, 172, 44)';
        addPage.className += ' disabled';
        statusText.className += " finished";
        statusText.textContent = "Finished";
    }
    else if(book.status == STATE[1]) {
        bookNode.style.borderLeft = '10px solid rgb(179, 65, 65)';
        statusText.textContent = "Unfinished";
        statusText.className += " unfinished";
    }
    else {
        bookNode.style.borderLeft = '10px solid rgb(197, 197, 197)';
        decPage.className += ' disabled';
        statusText.className += " not-started";
        statusText.textContent = "Not Started";
    }
    name.appendChild(nameText);
    author.appendChild(authorText);
    curr_page.appendChild(decPage);
    curr_page.appendChild(pageInput);
    curr_page.appendChild(addPage);
    curr_page.appendChild(totalPage);
    status.appendChild(statusText)
    buttons.appendChild(editBtn);
    buttons.appendChild(removeBtn);
    
    bookNode.appendChild(name);
    bookNode.appendChild(author);
    bookNode.appendChild(curr_page);
    bookNode.appendChild(status);
    bookNode.appendChild(buttons);
    booksTable.appendChild(bookNode);
}

/* 
    Book Modification
    Adding book
    removing book
    editing book
*/
function addBook() {
    let name = titleCase(getNode('#name').value.split(" "));
    let author = titleCase(getNode('#author').value.split(" "));
    const newBook = new Book( 
        max,
        name,
        author, 
        current.value, 
        total.value
        );
    localStorage.setItem(`${max++}`, JSON.stringify(newBook));
    addToLibrary(newBook);
    newBook.addToLibrary();
    bookForm.reset();
    toggleForm();
    console.log(max)
}
function removeBook(e){
    let i = e.getAttribute('data-index');
    library[i] = "";
    localStorage.setItem(`${i}`, "");
    document.getElementById(`book${i}`).remove();
}
function editBook(book){
    book.classList.toggle('on-edit-btn');
    let i = book.getAttribute('data-index');
    if(book.classList.contains('on-edit-btn')){
        let name = getNode(`p[data-index="n${i}"]`);
        let author = getNode(`p[data-index="a${i}"]`);
        let nameInput = document.createElement('input');
        let authorInput = document.createElement('input');
        nameInput.value = name.textContent;
        nameInput.setAttribute("data-index", `n${i}`);
        authorInput.value = author.textContent;
        authorInput.setAttribute("data-index", `a${i}`);
        name.parentNode.replaceChild(nameInput, name);
        author.parentNode.replaceChild(authorInput, author);
        book.textContent = 'check';
    }else{
        let nameInput = getNode(`input[data-index="n${i}"]`);
        let authorInput = getNode(`input[data-index="a${i}"]`);
        let name = document.createElement('p');
        let author = document.createElement('p');
        name.textContent = titleCase(nameInput.value.split(" "));
        author.textContent = titleCase(authorInput.value.split(" "));
        name.setAttribute("data-index", `n${i}`);
        author.setAttribute("data-index", `a${i}`);
        nameInput.parentNode.replaceChild(name, nameInput);
        authorInput.parentNode.replaceChild(author, authorInput);
        library[i].name = name.textContent;
        library[i].author = author.textContent;
        book.textContent = 'edit';
        localStorage.setItem(`${i}`, JSON.stringify(library[i]));
    }
    
}
/* 
    for changing current page
    disable when higher than totalPages
    or == 0
*/
function pageUp(e){
    let index = e.getAttribute('data-index');
    getNode(`input[data-index="${index}"]`).stepUp();
    if(index != 'curr' && index != 'total') {
        library[index].setPage(+library[index].currentPage + 1, index);
        localStorage.setItem(`${index}`, JSON.stringify(library[index]));
        localStorage.getItem(`${index}`);
    }
    else if(index == 'total') setMax();
}
function pageDown(e){
    let index = e.getAttribute('data-index');
    getNode(`input[data-index="${index}"]`).stepUp(-1);
    if(index != 'curr' && index != 'total') {
        library[index].setPage(+library[index].currentPage - 1, index);
        localStorage.setItem(`${index}`, JSON.stringify(library[index]));
        localStorage.getItem(`${index}`);
    }
    else if(index == 'total') setMax();
}
function changePage(e){
    let index = e.getAttribute('data-index');
    library[index].setPage(+e.value);
    getNode(`input[data-index="${index}"]`).value = library[index].currentPage;
}
function disableButton(button){
    button.classList.add('disabled');
    button.setAttribute('disabled', 'true');
}
function enableButton(button){
    button.classList.remove('disabled');
    button.removeAttribute('disabled');
}
/* 
    setting visual book state
*/
function changeState(id){
    let status = getNode(`.status-text[data-index="${id}"]`);
    let bookRow = getNode(`#book${id}`);
    library[id].setStatus();
    if(library[id].prevState != library[id].status){
        if(library[id].status == STATE[2]){
            status.textContent = STATE[2];
            setTimeout(() =>{status.classList.remove('transition')}, 100 );
            status.classList.add('transition');
            status.classList.add('finished');
            status.classList.remove('not-started');
            status.classList.remove('unfinished');
            library[id].prevState = STATE[2];
            bookRow.style.borderLeft = '10px solid rgb(44, 172, 44)';
            disableButton(getNode(`.add[data-index="${id}"]`));
            enableButton(getNode(`.minus[data-index="${id}"]`));
        }
        else if(library[id].status == STATE[0]) {
            status.textContent = STATE[0];
            setTimeout(() => {status.classList.remove('transition')}, 100 );
            status.classList.add('transition');
            status.classList.add('not-started');
            status.classList.remove('unfinished');
            status.classList.remove('finished');
            library[id].prevState = STATE[0];
            bookRow.style.borderLeft = '10px solid rgb(197, 197, 197)';
            enableButton(getNode(`.add[data-index="${id}"]`));
            disableButton(getNode(`.minus[data-index="${id}"]`));
        }
        else if(library[id].status == STATE[1]) {
            status.textContent = STATE[1];
            setTimeout(() => {status.classList.remove('transition')}, 100 );
            status.classList.add('transition');
            status.classList.add('unfinished');
            status.classList.remove('not-started');
            status.classList.remove('finished');
            library[id].prevState = STATE[1];
            bookRow.style.borderLeft = '10px solid rgb(179, 65, 65)';
            enableButton(getNode(`.add[data-index="${id}"]`));
            enableButton(getNode(`.minus[data-index="${id}"]`));
        }
    }
    
} 


function toggleForm(){
    bookForm.classList.toggle('visible');
    const display = bookForm.classList;
    if(display.contains('visible')) {
        bookForm.style.opacity = 1;
        bgOverlay.style.opacity = 0.5;
        bgOverlay.style.pointerEvents = 'all';
        addBtn.classList.add('on-book-btn');
        addBtn.classList.remove('add-book-btn');
    }
    else {
        bookForm.style.opacity = 0;
        bgOverlay.style.opacity = 0;
        bgOverlay.style.pointerEvents = 'none';
        addBtn.classList.add('add-book-btn');
        addBtn.classList.remove('on-book-btn');
    }
}
function setMax(){
    current.setAttribute('max',total.value);
}


class Book{
    constructor(id, name, author, currPage = 0, totalPages = 1600){
        this.id = id
        this.name = name;
        this.author = author;
        this.currentPage = currPage;
        this.totalPages = totalPages;
        if(this.currentPage == this.totalPages) this.status = STATE[2];
        else if(this.currentPage > 0) this.status = STATE[1];
        else this.status = STATE[0];
        this.prevState = this.status;
    }
    addToLibrary(){
        library.push(this);
    }
    setPage(page, index){
        if(page <= this.totalPages && page >= 0) {
            this.currentPage = page;
            changeState(index);
        }
    }
    setStatus(){
        if(this.currentPage == this.totalPages) this.status = STATE[2];
        else if(this.currentPage > 0) this.status = STATE[1];
        else this.status = STATE[0];
    }
}

document.body.onload = () => {
    readStorage();
    readLibrary();
}
total.onchange = ()=>{
    setMax();
}
function readStorage(){
    if (storageAvailable('localStorage')) {
        if(localStorage.length > 0){
            const keys = Object.keys(localStorage);
            let items = {...localStorage}, i = 0;
            for( i in items){
                let item = localStorage.getItem(i);
                if(item != ""){
                    let book = JSON.parse(item);
                    Object.setPrototypeOf(book, Book.prototype.constructor.prototype);
                    library.push(book);
                    max = +book.id + 1;
                }else{
                    library.push("");
                }
            }
        }else{
            library = [
                new Book(0,"A Song of Fire and Ice", "George R.R Martin", 2, 506),
                new Book(1,"Sherlock Holmes", "Arthur Conan Doyle", 0, 400),
                new Book(2,"JS for Babies", "IDK", 205, 205)
            ];
            library.forEach((book,idx) => {
                localStorage.setItem(`${idx}`, JSON.stringify(book));
            })
            max = 3;
        }
        
    
    }
    else {
        console.log('Oh no')
    }
}
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
function titleCase(input){
    input.forEach((word,idx) => {
        input[idx] = word.substr(0,1).toUpperCase() + word.substr(1);
    });
    return input.join(' ');
}
function clear(){
    localStorage.clear()
}