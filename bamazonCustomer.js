//hello world
const inquirer = require("inquirer");
const mysql = require("mysql");

const mysqlConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'P455W0RD',
    database: 'bamazonDB'
  };
  
  const connection = mysql.createConnection(mysqlConfig);
  
  connection.connect(function(err) {
      if(err){
        console.log(err);
      }else{
          console.log("We have connection");
      }
    connection.end();
  });

 function check() {
    var query = "SELECT id, product_name, price FROM products";
    connection.query(query, function(err,res) {
        for(var i = 0; i < res.length; i++) {
            console.log("Product ID: " + res[i].id + "|| Name: " + res[i].product_name + 
            "|| Price: " + res[i].price);
        }inquirer
        .prompt({
        name: "action",
        type: "input",
        message: "What would you like to buy?"
        }).then(function(answer) {
        console.log(answer.action);
        var cosa = res[answer.action - 1];
        console.log(cosa);
        })   ;
    });
   
 };

var question = function() {
   //console.log("This is ok");

    
};

check();
