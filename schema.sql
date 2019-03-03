--hello world
DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (50) NULL,
    department_name VARCHAR (50) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT(100) NULL,
    PRIMARY KEY (id)
);

INSERT INTO procucts (product_name, department_name, price, stock_quantity)
VALUES("Boots", "Apparel", 100.50, 300);
INSERT INTO procucts (product_name, department_name, price, stock_quantity)
VALUES("Guitar", "Electronics", 666.00, 40);
INSERT INTO procucts (product_name, department_name, price, stock_quantity)
VALUES("Socks", "Apparel", 5.00, 1000);
INSERT INTO procucts (product_name, department_name, price, stock_quantity)
VALUES("Make up", "Apparel", 20.00, 500);
INSERT INTO procucts (product_name, department_name, price, stock_quantity)
VALUES("Cell Phone", "Electronics", 1000.00, 20);
INSERT INTO procucts (product_name, department_name, price, stock_quantity)
VALUES("Sofa", "Furniture", 500.60, 60 );
INSERT INTO procucts (product_name, department_name, price, stock_quantity)
VALUES("Bar Stool", "Furniture", 150.00, 300);
INSERT INTO procucts (product_name, department_name, price, stock_quantity)
VALUES("Jersey", "Apparel", 56.78, 493 );
INSERT INTO procucts (product_name, department_name, price, stock_quantity)
VALUES("Book Shelf", "Furniture", 239.00, 71);
INSERT INTO procucts (product_name, department_name, price, stock_quantity)
VALUES("Coffee Maker", "Electronics", 189.98, 3);

CREATE TABLE departments {
    department_id INT (100) NULL,
    department_name VARCHAR (50) NULL,
    over_head_cost INT (1000) NULL,
    PRIMARY KEY (department_id)
};

INSERT INTO products( product_sales);