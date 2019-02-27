//hello world
const inquirer = require("inquirer");
const mysql = require("mysql");
var cosa;

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
    var query = "SELECT id, product_name, price, stock_quantity FROM products";
    connection.query(query, function(err,res) {
        for(var i = 0; i < res.length; i++) {
          var cantidad = res[i].stock_quantity;
          console.log("Product ID: " + res[i].id + "|| Name: " + res[i].product_name + 
          "|| Price: " + res[i].price);
        }inquirer
        .prompt({
        name: "action",
        type: "input",
        message: "What would you like to buy?"
        }).then(function(answer) {
        console.log(answer.action);
        cosa = res[answer.action - 1];
        console.log(cosa);
        var cosaNombre = cosa.product_name;
        var cosaCantidad = cosa.stock_quantity;
        // question();
        inquirer
        .prompt({
          name: "order",
          type: "input",
          message: "How many would you like to buy?"
        }).then(function(answer) {
          console.log(answer.order);
          console.log("Item is: " + cosaNombre);
          console.log("Product in stock: " + cosaCantidad);
          var stockLeft = cosaCantidad - answer.order;
          console.log(stockLeft);
          
        });
        });
    });
   
 };

 function test() {
    var examen = "SELECT id,stock_quantity FROM products";
    connection.query(examen, function(err,res) {
      console.log("Product id: " + res[2].id + "Stock: " + res[2].stock_quantity);
    });
 };


// test();
check();
