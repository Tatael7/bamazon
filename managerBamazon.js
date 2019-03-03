//manger view
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
.prompt(
    {
        type: "password",
        messag: "What is your password Manager?",
        name: "password"
    }
)
.then(function(response) {
    if(response.password === "123") {
        console.log("yes");
        moveForward();
    }else{
        console.log("no");
    }
});

function moveForward() {
    connection.connect(function(err) {
        if(err) throw err;
        console.log("\nWelcome to Bamazon.");
        managerCheck();
    
    });
}


function managerCheck() {
    inquirer
    .prompt({
        name: "task",
        type: "list",
        message: "Welcome manager, what would you like to do?",
        choices: ["View Products for Sale", "View Low inventory items", "Add to Inventory","Add new Product", "EXIT"]
    })
    .then(function(answer) {
        if(answer.task === "View Products for Sale") {
            productsSale();
        }else if(answer.task === "View Low inventory items") {
            lowInventory();
        }else if(answer.task === "Add to Inventory") {
            addInventory();
        }else if(answer.task === "Add new Product") {
            nuevoProduct();
        }else{
            connection.end();
        }
    });
}

function productsSale() {
    console.log("I see you wish to check products.");
    connection.query(
        "SELECT id, product_name, price, stock_quantity FROM products", function(err, res) {
            for(var i = 0; i < res.length; i++) {
                console.log("Id: " + res[i].id + "|| Product: " + res[i].product_name +
                "|| Price: " + res[i].price + "|| Stock: " + res[i].stock_quantity);

            }
        }
    )
    connection.end();
}

function lowInventory() {
    console.log("I see you wish to see the low inventory items.");
    connection.query(
        "SELECT id, product_name, stock_quantity FROM products", function(err, res) {
            for(var i = 0; i < res.length; i++) {
                if(res[i].stock_quantity < 50 ) {
                    console.log("The following product is low on stock; Id: " + res[i].id + 
                    " " + res[i].product_name);
                }
            };
        }
    );
    connection.end();
}

function addInventory() {
    console.log("I see you wish to add inventory to existing items.");
    connection.query(
        "SELECT id, product_name, stock_quantity FROM products", function(err, res) {
            for(var i = 0; i <res.length; i++) {
                console.log("Id: " + res[i].id + "|| Product: " + res[i].product_name);
            }inquirer
            .prompt(
                {
                    name: "increase",
                    type: "input",
                    message: "Which item would you like to stock? Chose by id."
                }
            )
            .then(function(answer) {
                var cosa = res[answer.increase - 1];
                var cosaCantidad = cosa.stock_quantity;
                console.log(cosa.product_name + " has " + cosa.stock_quantity + 
                " in stock.");
                inquirer
                .prompt(
                    {
                        name: "incremento",
                        type: "input",
                        message: "How much would you like to add to the stock?"
                    }
                )
                .then(function(respuesta) {
                    console.log(respuesta.incremento);
                    var finalCantidad = parseInt(cosaCantidad) + parseInt(respuesta.incremento);
                    console.log("You will add " + respuesta.incremento + " to " + cosa.product_name);
                    console.log("Final stock will be: " + finalCantidad);
                    connection.query("UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: finalCantidad
                        },
                        {
                            id: cosa.id
                        }
                    ],
                    function(err) {
                        if(err) throw err;
                        console.log("Stock has been increased.");
                        connection.end();
                    }
                    );
                })
            });
        }
    );
    
}

function nuevoProduct() {
    console.log("I see you wish to add new items to the store.");
    inquirer
    .prompt(
        [
            {
                name: "item",
                type: "input",
                message: "What is the item you want to add?"
            },
            {
                name: "depart",
                type: "input",
                message: "What department does this go in?"
            },
            {
                name: "precio",
                type: "input",
                message: "What will the price be?"
            },
            {
                name: "cuanto",
                type: "input",
                message: "How much will be the initial stock?"
            }
        ]
    )
    .then(function(value) {
        connection.query(
            "INSERT INTO products SET ?",
            {
                product_name: value.item,
                department_name: value.depart,
                price: value.precio,
                stock_quantity: value.cuanto
            },
            function(err) {
                if(err) throw err;
                console.log(value.item + " has been added to the store.");
                connection.end();
            }
        );
    });
    
}





