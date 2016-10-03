
(function() {
    var signup = $('.container--static .button--signup');
    var login = $('.container--static .button--login');
    var signupContent = $('.container--sliding .slider-content.signup');
    var loginContent = $('.container--sliding .slider-content.login');
    var slider = $('.container--sliding');

    signup.on('click', function() {
        loginContent.css('display', 'none');
        signupContent.css('display', 'initial');
        slider.animate({
            'left': '30%'
        }, 350, 'easeOutBack');
    });

    login.on('click', function() {
        signupContent.css('display', 'none');
        loginContent.css('display', 'initial');
        slider.animate({
            'left': '70%'
        }, 350, 'easeOutBack');
    });
})();


// array of objects to store existing user data
var existingEmails = [
    {
        email: "celinamixco@gmail.com",
        pass: "password1"
    },
    {
        email: "gerardorosa@gmail.com",
        pass: "password2"
    },
    {
        email: "francisco75@gmail.com",
        pass: "password3"
    }
]

// function to determine if the user exists and the password matchs that user, function fires on user clicking button line 28 index.html
function signin() {
    // store the tag with id="sign" in var username
    var email = document.getElementById("email").value
    // store the tag with id="sign" in var password
    var pass = document.getElementById("password").value
    // store the tag with id="results" in var results
    var results = document.getElementById('results')

    // confirm the element exists and then what value the user submits
    
    console.log("email value is: " + email)
    console.log("password value is: " + pass)
    console.log(email, password, results)
    
    // loop through existing users array one item at a time 
    for(i = 0; i < existingEmails.length; i = i + 1) {
        // check each user as you loop through the array of objects
        console.log(existingEmails[i])
        if(email.value === existingEmails[i].email && password.value === existingUsers[i].pass) {
            // check to see if the IF statement code block executed
            console.log("if statement ran, so we have a match!")
            // change class of results to let the user know it worked 
            results.className = 'success'
            // update the text of the results element to display a success message
            results.textContent = "Welcome! " + email.value + "!"
            // stop the function from running any further cause we got a match!!!
            return
        } 
    }

    // run failure if username and password didn't match
    console.log("no match was found :/")
    // change class of results to let the user know it failed
    results.className = 'failure'
    // update the text of the results element to display a failure message
    results.textContent = "!! username or password don't match"
}

function register() {
    // store the tag with id="sign" in var username
    var email = document.getElementById("email")
    // store the tag with id="sign" in var password
    var password = document.getElementById("password")
    // store the tag with id="results" in var results
    var results = document.getElementById('results')
    

    
    // loop through existing users array one item at a time 
    for(i = 0; i < existingEmails.length; i = i + 1) {
        // check each user as you loop through the array of objects
        console.log(existingEmails[i])
        if(email.value === existingEmails[i].user) {
    
            // check to see if the IF statement code block executed
            console.log("if statement ran, so we have a match!")
            alert("username is taken")
            return
        } 
    }
     // check the password length  
     if(password.value.length < 8){
    alert("password length needs 8 characters")
    return
}
     // create or register user
var newEmail = { email:email.value, pass:password.value}
    
    // confirm the element exists and then what value the user submits
    existingEmails.push("newEmail")
    console.log(email, password, results)
    console.log("email value is: " + email.value)
    console.log("password value is: " + password.value)
}
