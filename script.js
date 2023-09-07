//SCROLL TO REVEAL
ScrollReveal().reveal('.about-sec');
ScrollReveal().reveal('.about-sec',{delay:250});
ScrollReveal().reveal('.about-me');
ScrollReveal().reveal('.about-me',{delay:250});
ScrollReveal().reveal('.about-readme');
ScrollReveal().reveal('.about-readme',{delay:250});




const btn = document.getElementById('scroll')

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
    
})





function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_m9pytk4";
    const templateID = "template_nawkjla";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }





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

function validateName(input) {
    // var name = input.value;
    // var name = document.getElementById('name').value;
    // var namePattern =/^[a-zA-Z]+ [a-zA-Z]+$/;

    // var errorElement = document.getElementById("email-error");

    // if (!namePattern.test(name)) {
    //     input.classList.add("invalid-email");
    //     errorElement.textContent = "Invalid name given.";
    // } else {
    //     input.classList.remove("invalid-name");
    //     errorElement.textContent = "";
    // }


    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    if(!regName.test(name)){
         input.classList.add("invalid-email");
        //  errorElement.textContent = "Invalid name given.";
        // alert('Please enter your full name (first & last name).');
        document.getElementById('name').focus();
        return false;
    }else{
        input.classList.remove("invalid-name");
        // alert('Valid name given.');
        return true;
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

