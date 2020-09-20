const express = require("express");
const app = express();
const cors = require("cors");
const mysql =  require("mysql");


const con =  mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"todoapp"
})

app.use(cors());
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

// Get all todos
app.get("/getTodos",(request, response)=>{
  let data = [];
 con.query("SELECT * FROM appdata ORDER BY time_stamp", function (err, result, fields) {
          if (err) throw err;
          response.json(result);
        });
  
})

//Insert a new Todo
app.post("/addTodo",(request, response)=>{
  const todo = request.body.todo;
 var sql = `INSERT INTO appdata (id, todoString) VALUES ('${todo.id}', '${todo.todoString}')`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    response.json("Added Successfully");
  });

})

// delete todo
app.post("/deleteTodo", (request,response)=>{
  const id = request.body.id;
  
  var sql = `DELETE FROM appdata WHERE id = '${id}'`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    response.json("Todo Deleted");
  });
})

// update todo
app.post("/updateTodo", (request,response)=>{
  const todo = request.body.todo;
  
  var sql = `UPDATE appdata SET todoString = '${todo.todoString}' WHERE id = '${todo.id}'`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    response.json("Todo Updated");
  });
})

// server lisetining at
app.listen(4000,()=>{
    console.log("server has started at 4000 port");
})