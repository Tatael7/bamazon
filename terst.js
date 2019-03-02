var inquirer = require("inquirer");

inquirer
.prompt(
    {
        type: "password",
        messag: "What is your password",
        name: "password"
    }
)
.then(function(response) {
    if(response.password === "hello") {
        console.log("yes");
    }else{
        console.log("no");
    }
});