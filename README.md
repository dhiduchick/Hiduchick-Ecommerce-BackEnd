# Hiduchick-Ecommerce-BackEnd
Hiduchick UNH Bootcamp Challenge 13

## Description 

The primary objective of this application is to function as the backend infrastructure for an e-commerce website. Its functionality extends to the creation and seeding of a development database with essential test data. Subsequently, the application leverages API endpoints, including GET, POST, PUT, and DELETE routes, to proficiently handle the retrieval, creation, update, and deletion of data within the database. To ensure the robustness of these features, comprehensive testing can be conducted using the Insomnia tool.

## Usage
1. Clone the repo 
2. Open the repo in VS code 
3. Open the terminal and run the command npm i to install inquire 
- Create the database by opening terminal running the schema.sql file using command: mysql -uroot < db/schema.sql

- Seed the database by opening terminal running the index.js file within the seeds folder using the command: node seeds/index.js

- Invoke app with npm start

## Installation

1. Clone the repo
   git clone https://github.com/dhiduchick/Hiduchick-Ecommerce-BackEnd.git

2. Open in VS Code. If you do not have VS code you must install it.

3. Run npm i to install dependencies needed for this application 


## Demo
[![Watch the video](./images/video-start-image.png)](https://drive.google.com/file/d/1PmCThYbYDoJD6x8F1zWSILT9gi1bhkAk/view)

## Product Routes 
Run these commands in Insomnia
-To get all products: GET: http://localhost:3001/api/products
-Get a prodduct by its ID: GET http://localhost:3001/api/products/ id
-Add a new product: POST: http://3001/api/poducts
![Post Example]()

-Update a product by its ID: PUT: http://localhost:3001/api/products/ id
![Put Example]()

-Delete a product by its ID: DELETE: http://localhost:3001/api/products/ id

## Tag Routes 
-Get all tags: GET: http://localhost:3001/api/tags
-Get a tag by ID: GET: http://localhost:3001/api/tags/ id
-Add a new tag: POST: http://localhost:3001/api/tags
![Post Example]()

-Update a tag by its ID: PUT: http://localhost:3001/api/tags/ id
![Put Example]()

-Delete a tag by its ID: DELETE: http://localhost:3001/api/tags/ id

## Category Routes 
-Get all categories: GET: http://localhost:3001/api/categories
-Get a category by ID: GET: http://localhost:3001/api/categories/ id
-Add a new category: POST: http://localhost:3001/api/categories
![Post Example]()

-Update a category by its ID: PUT: http://localhost:3001/api/categories/ id
![Put Example]()

-Delete a category by its ID: DELETE: http://localhost:3001/api/categories/ id
![Update employee](./images/8.png)

# Author
Created with ♡ by Daelyn Hiduchick
