//supervisor view
const mysql = require("mysql");
const inquirer = require("inquirer");
const mysqlConfig = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "P455W0RD",
    database: "bamazonDB"
};
const connection = mysql.createConnection(mysqlConfig);

inquirer
.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your Username."
    },
    {
        name: "password",
        type: "input",
        message: "Enter your password."
    }
])
.then(function(answer) {
   if(answer.name === "tata" && answer.password === "kaka" ) {
       console.log("Welcome supervisor.");
   }else{
       console.log("You don't have the right credentials.");
   }
});