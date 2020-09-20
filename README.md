Hi there this is my todoApp.
Here I have used  react as a frontend and nodejs as a backend and mysql as database.
Steps to run this project:-
 1. Please create a database in mysql with the name of "todoapp" and import the db dump which I have placed in my project's folder with the name of todoapp.sql.
  Note: Please check the user and password of your mysql you can change both of these in server.js. In my case both of them are root.
  
  const con =  mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"todoapp"
    })

 2. start node.js server by executing this command in the command prompt or git bash or vscode terminal:
   "node server"

   Now, Your server will start at 4000 port.

3. Now, run your react app by executing this command in terminal:
   "npm start"
    
    Your react app will start running at 300o port

4. Open browser and hit this url:
    "http://localhost:3000/

     