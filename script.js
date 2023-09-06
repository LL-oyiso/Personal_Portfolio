//SCROLL TO REVEAL
ScrollReveal().reveal('.about-sec');
ScrollReveal().reveal('.about-sec',{delay:200});



const btn = document.getElementById('scroll')

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
    
})
// validation code
// function ValidateEmail(inputText)
// {
//  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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


function validatemessage(input) {
    var message = input.value;
    var messagePattern =/^[^0-9][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var errorElement = document.getElementById("email-error");

    if (!messagePattern.test(message)) {
        input.classList.add("invalid-message");
        errorElement.textContent = "Message can not start with a number.";
    } else {
        input.classList.remove("invalid-message");
        errorElement.textContent = "";
    }
}

