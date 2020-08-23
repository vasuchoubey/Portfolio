var typed2 = new Typed('#type', {
    strings: ['VASU', 'Noob', 'Student'],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
    startDelay: 580
});

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function wrongText()                                    
{ 
    var name = document.forms["RegForm"]["Name"];               
    var email = document.forms["RegForm"]["E-Mail"];    
    var mobile = document.forms["RegForm"]["Mobile"];   
    var msg = document.forms["RegForm"]["message"];               

    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
    if (msg.value == "") {
        window.alert("Please enter your message.");
        msg.focus();
        return false;
    } 

    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (phone.value == "")                           
    { 
        window.alert("Please enter your mobile number."); 
        phone.focus(); 
        return false; 
    } 

    return true; 
}
