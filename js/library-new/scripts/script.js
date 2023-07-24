const booksContainer = document.getElementById("bookContainer");

let myLibrary = [
	new Book("Test Book Reading", "Test Author", 50, 1),
	new Book("Test Book Unread", "Test Author", 50, 0),
	new Book("Test Book Complete", "Test Author", 50, 50),
];

function Book(title, author, pages, totalPagesRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.totalPagesRead = totalPagesRead

	this.getStatus = () => {
		if (this.totalPagesRead == this.pages) return "complete";
		else if (this.totalPagesRead < this.pages && this.totalPagesRead > 0) return "reading";
		else return "unread"
	}
}

function addBookToLibrary(newBook) {
	myLibrary.push(newBook);
	addBookToContainer(newBook);
}

function addBookToContainer(book) {
	booksContainer.innerHTML += `
		<div class="book-card book-${book.getStatus()}">
			<div class="book-title">
				<h2>${book.title}</h2>
			</div>
			<div class="book-author">
				<h5>${book.author}</h5>
			</div>
			<div class="book-pages">
				<b>Pages:</b>
				<span>${book.pages}</span>
			</div>
			<div class="book-read">
				<b>Current Page:</b>
				<span>${book.totalPagesRead}</span>
			</div>
		</div>
	`
}

document.querySelectorAll(".input > input").forEach((input) => {
	function checkValue() {
		input.setCustomValidity("")
		input.classList.remove("has-error")
		if (input.value.length != 0 || (input.type == "number" && input.validity.badInput)) {
			input.classList.add("has-value")
		} else {
			input.classList.remove("has-value")
		}
	}
	checkValue()
	input.addEventListener("change", checkValue)
	input.addEventListener("keyup", checkValue)
})

const bookTitleInput = document.getElementById("bookTitle");
const bookAuthorInput = document.getElementById("bookAuthor");
const bookPagesInput = document.getElementById("bookPages");
const pagesReadInput = document.getElementById("pagesRead");
document.getElementById("newBookForm").addEventListener("submit", function(e) {
	e.preventDefault()
	function handleInputError(input) {
		input.classList.add('is-error');
		input.ariaInvalid = "true"
	}

	function handleCustomValidity(input, message) {
		input.setCustomValidity(message)
		input.reportValidity();
		input.setCustomValidity(""); // JS does not clear the validity if the changed input is not this variable
	}

	if (bookTitleInput.value.length == 0) {
		handleInputError(bookTitleInput)
		handleCustomValidity(bookTitleInput, "Book Title cannot be empty.")
		return
	}
	if (bookAuthorInput.value.length == 0) {
		handleInputError(bookAuthorInput)
		handleCustomValidity(bookAuthorInput, "Book Author cannot be empty.")
		return
	}
	if (!bookPagesInput.value.match("^\\d+$")) { 
		handleInputError(bookPagesInput)
		handleCustomValidity(bookPages, "Book Pages must be a number.")
		return
	}
	if (!pagesReadInput.value.match("^\\d+$")) {
		handleInputError(pagesReadInput)
		handleCustomValidity(pagesReadInput, "Total Pages Read must be a number.")
		return
	} 
	if (parseInt(pagesReadInput.value) > parseInt(bookPagesInput.value)) {
		handleInputError(pagesReadInput)
		handleCustomValidity(pagesReadInput, "Total pages read cannot be more than the books page.")
		return
	}
	const book = new Book(bookTitleInput.value, bookAuthorInput.value, parseInt(bookPagesInput.value), parseInt(pagesReadInput.value))
	addBookToLibrary(book);
	this.reset();
	window.location.href = "#"
})

for (const book of myLibrary) {
	addBookToContainer(book)
}
