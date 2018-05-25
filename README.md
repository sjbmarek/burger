# Burger Bar

# Node Express Handlebars

### Overview

Created a burger bar with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Followed the MVC design pattern; used Node and MySQL to query and route data in the app, and Handlebars to generate HTML.  

Deployed in Heroku:  https://safe-headland-84617.herokuapp.com/

Video of wroking app:  https://drive.google.com/file/d/1nwD5VIqDtghDB4HVZhLcEdmniFAfTsTh/view

* Burger Bar is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, this app will display the burger on the left side of the page -- waiting to be eaten.

* Each burger in the waiting area also has a `Eat Now` button. When the user clicks it, the burger will move to the right side of the page.

* The app stores every burger in a database, whether eaten or not.

#### Directory structure


```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```



### Portfolio

This app is included in my portfolio.


