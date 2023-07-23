function handleInputChange(input) {
	if (input.value.length > 0) {
		input.classList.add('has-value');
	} else {
		input.classList.remove('has-value');
	}
}

function handleInputError(input) {
	input.parentNode.classList.add('error');
	input.classList.add('error');
	input.ariaInvalid = "true"
}

const inputs = document.querySelectorAll(".input > input");
const nameInput = document.querySelectorAll(".name-input")
// const email = document.getElementById("email"); -- html has built in form validation for email addresses
const phone = document.getElementById("phone");
const pass = document.getElementById("pass");
const confirmPass = document.getElementById("confirmPass");

inputs.forEach(input => {
	input.addEventListener("change", function(e) {
		handleInputChange(this);
	});
	input.addEventListener("keyup", function(e) {
		this.classList.remove('error');
	})
	handleInputChange(input);
})

nameInput.forEach(input => {
	input.addEventListener("change", function(e) {
		if (!this.value.match("^[a-zA-Z ]*$")) {
			handleInputError(this);
		} else {
			this.classlist.remove('error');
		}
	});
})

phone.addEventListener("change", function(e) {
	if (!this.value.match("^[0-9]*$")) {
		handleInputError(this);
	} else {
		this.classList.remove('error');
	}
});

confirmPass.addEventListener("change", function(e) {
	if (this.value != pass.value) {
		handleInputError(this);
		this.parentNode.setAttribute("data-error", "Password does not match")
	} else {
		this.parentNode.classList.remove('error');
		this.classList.remove('error');
	}
})
