// Set variables like $username = "admin" and $password = "1234".

// Create another sets of variable with inputUsername and inputPassword.

// Check if both match, show "Login Successful", otherwise show "Invalid username or password".

const username = "admin";
const password = "1234";
const auth = (inputUsername, inputPassword) => {
    if(inputUsername == username){
        if(inputPassword == password){
            console.log("Login Successful");
        }
    } else{
        console.log("Invalid username or password");
    }
}

console.log(auth("helal", "123456"));
console.log(auth("admin", "1234"));