


document.addEventListener("DOMContentLoaded", function() {


    var recaptcha = document.querySelector(".g-recaptcha");
    var submitButton = document.getElementById("submit");
  
    // Function to enable the submit button
    function enableSubmitButton() {
      submitButton.disabled = false;
    }
    
    
    recaptcha.addEventListener("change", enableSubmitButton);
  
    var form = document.getElementById("form");
  
  
    form.addEventListener("submit", function(event) {
      
      event.preventDefault();

      if (g-recaptcha.getResponse().length === 0) {
        // If reCAPTCHA is not completed, show an alert
        alert("Please complete the reCAPTCHA before submitting the form.");
        return; // Prevent further form processing
      }
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;
      var isValid = true;
  
      document.getElementById("name-error").textContent = "";
      document.getElementById("email-error").textContent = "";
      document.getElementById("message-error").textContent = "";
  
      if (name.length < 3) {
        document.getElementById("name-error").textContent = "Name should be at least 3 characters long.";
        isValid = false;
      }
  
      var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      if (!email.match(emailRegex)) {
        document.getElementById("email-error").textContent = "Please enter a valid email address.";
        isValid = false;
      }
  
      if (message.length < 10) {
        document.getElementById("message-error").textContent = "Message should be at least 10 characters long.";
        isValid = false;
      }
  
      if (isValid) {
        
        sendMail(event);
        // alert("You message was sent successfully!")
        form.reset();
        
      }
    });
  });
  
  
    
               
             
             
             
              
           
             
              // function callback()
              // {
              //    const submitBtn = document.getElementById("submit")
              //    submitBtn.removeAttribute("disabled")
               
              // }
  
              function sendMail(e) {
              e.preventDefault();
  
  
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










const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});






ScrollReveal().reveal('.about-sec');
ScrollReveal().reveal('.about-sec',{delay:250});
ScrollReveal().reveal('.about-me');
ScrollReveal().reveal('.about-me',{delay:250});

// ScrollReveal().reveal('.read-me',{delay:250});




const btn = document.getElementById('scroll')

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
    
})





// function sendMail() {
    

//     var params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       message: document.getElementById("message").value,
//     };
  
//     const serviceID = "service_m9pytk4";
//     const templateID = "template_nawkjla";
   
//       emailjs.send(serviceID, templateID, params)
//       .then(res=>{
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("message").value = "";
//           console.log(res);
//           alert("Your message sent successfully!!")
  
//       })
//       .catch(err=>console.log(err));
  
//   }






// const submitBtn = document.getElementById("submit")

// submitBtn.addEventListener("click", function validateForm(e){

//   e.preventDefault()
    


// })
    //   function validateForm() {
       
    //         var name = document.getElementById("name").value;
    //         var email = document.getElementById("email").value;
    //         var message = document.getElementById("message").value;
    //         var isValid = true;

           
    //         document.getElementById("name-error").textContent = "";
    //         document.getElementById("email-error").textContent = "";
    //         document.getElementById("message-error").textContent = "";

        
    //         if (name.length < 3) {
    //             document.getElementById("name-error").textContent = "Name should be at least 3 characters long.";
    //             isValid = false;
    //         }

    //         var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    //         if (!email.match(emailRegex)) {
    //             document.getElementById("email-error").textContent = "Please enter a valid email address.";
    //             isValid = false;
    //         }

           
    //         if (message.length < 10) {
    //             document.getElementById("message-error").textContent = "Message should be at least 10 characters long.";
    //             isValid = false;
    //         }

    //         return isValid;

            
    //     }
  
    