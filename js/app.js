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

//jquery login//

$('#login-button').click(function(){
    $('#login-button').fadeOut("slow",function(){
      $("#container").fadeIn();
      TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
      TweenMax.to("#container", .4, { scale: 1, ease:Sine.easeInOut});
    });
  });
  
  $(".close-btn").click(function(){
    TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
    TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
    $("#container, #forgotten-container").fadeOut(800, function(){
      $("#login-button").fadeIn(800);
    });
  });
  
  /* Forgotten Password */
  $('#forgotten').click(function(){
    $("#container").fadeOut(function(){
      $("#forgotten-container").fadeIn();
    });
  });