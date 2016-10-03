// // array of objects to store existing user data
// var existingUsers = [
//     {
//         user: "celinamixco@gmail.com",
//         pass: "password1"
//     },
//     {
//         user: "gerardorosa@gmail.com",
//         pass: "password2"
//     },
//     {
//         user: "francisco75@gmail.com",
//         pass: "password3"
//     }
// ]

// // function to determine if the user exists and the password matchs that user, function fires on user clicking button line 28 index.html
// function login() {
//     // store the tag with id="sign" in var username
//     var username = document.getElementById("username")
//     // store the tag with id="sign" in var password
//     var password = document.getElementById("password")
//     // store the tag with id="results" in var results
//     var results = document.getElementById('results')

//     // confirm the element exists and then what value the user submits
//     console.log(username, password, results)
//     console.log("username value is: " + username.value)
//     console.log("password value is: " + password.value)
    
//     // loop through existing users array one item at a time 
//     for(i = 0; i < existingUsers.length; i = i + 1) {
//         // check each user as you loop through the array of objects
//         console.log(existingUsers[i])
//         if(username.value === existingUsers[i].user && password.value === existingUsers[i].pass) {
//             // check to see if the IF statement code block executed
//             console.log("if statement ran, so we have a match!")
//             // change class of results to let the user know it worked 
//             results.className = 'success'
//             // update the text of the results element to display a success message
//             results.textContent = "Welcome to Codify Academy " + username.value + "!"
//             // stop the function from running any further cause we got a match!!!
//             return
//         } 
//     }

//     // run failure if username and password didn't match
//     console.log("no match was found :/")
//     // change class of results to let the user know it failed
//     results.className = 'failure'
//     // update the text of the results element to display a failure message
//     results.textContent = "!! username or password don't match"
// }

// // function to register
// function register() {
//     // store the tag with id="sign" in var username
//     var newUsername = document.getElementById("newUsername")
//     // store the tag with id="sign" in var password
//     var newPassword = document.getElementById("newPassword")
//     // store the tag with id="results" in var results
//     var results = document.getElementById('results')

//     // confirm the element exists and then what value the user submits
//     console.log(username, password, results)
//     console.log("newUsername value is: " + username.value)
//     console.log("newPassword value is: " + password.value)
    

//     // loop through existing users array one item at a time 
//     for(i = 0; i < existingUsers.length; i = i + 1) {
//         // check each user as you loop through the array of objects
//         console.log(existingUsers[i])
//         if(username.value === existingUsers[i].user && password.value === existingUsers[i].pass) {
//             // check to see if the IF statement code block executed
//             console.log("if statement ran, so we have a match!")
//             // change class of results to let the user know it worked 
//             results.className = 'success'
//             // update the text of the results element to display a success message
//             results.textContent = "The Username " + username.value + " already exists!"
//             // stop the function from running any further cause we got a match!!!
//             return
//         } 
//     }

//     // password 8 characters
//     if(newPassword.length <=8){
//         alert("This password is less than 8 characters")
//     }

//     // run failure if username and password didn't match
//     console.log("no match was found :/")
//     // change class of results to let the user know it failed
//     results.className = 'failure'
//     // update the text of the results element to display a failure message
//     results.textContent = "!! username or password don't match"
// }