//SCROLL TO REVEAL
ScrollReveal().reveal('.about-sec');
ScrollReveal().reveal('.about-sec',{delay:350});

// validation code
// function ValidateEmail(inputText)
// {
 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
// alert("Valid email address!");
// document.form.email.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.form.email.focus();
// return false;
// }
// }


function validateEmail(input) {
    var email = input.value;
    var emailPattern =/^[^0-9][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var errorElement = document.getElementById("email-error");

    if (!emailPattern.test(email)) {
        input.classList.add("invalid-email");
        errorElement.textContent = "Email is invalid. It should not start with a number.";
    } else {
        input.classList.remove("invalid-email");
        errorElement.textContent = "";
    }
}