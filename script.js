







document.addEventListener("DOMContentLoaded", function() {
  
    var form = document.getElementById("form");
  
  
    form.addEventListener("submit", function(event) {
      
      event.preventDefault();

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
      
        form.reset();
        
      }
    });
  });
  
  
    
               
             
             
             
              
           
             
              
  
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





const btn = document.getElementById('scroll')

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
    
})




    const element = document.querySelector(".js-tilt");
VanillaTilt.init(element);
element.addEventListener("tiltChange", callback);


element.vanillaTilt.destroy();


element.vanillaTilt.getValues();

element.vanillaTilt.reset();

const elements = document.querySelectorAll(".js-tilt");
VanillaTilt.init(elements);

