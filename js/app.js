const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');


menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const contactForm = document.querySelector('.contact-form')
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')
let country = document.getElementById('country')
let subject = document.getElementById('subject')

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        country: country.value,
        subject: subject.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type','application/json')
    xhr.onload = function(){
        console.log(xhr.responseText)
        if (xhr.responseText == 'success'){
          alert('Email sent');
          fname.value = '';
          lname.value = '';
          email.value =  '';
          country.value = '';
          subject.value = '';
        }else{
            alert('Something went wrong')
        }
        
    }
    xhr.send(JSON.stringify(formData))
})
