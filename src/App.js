import React, { useState, useEffect } from 'react';
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import TodoForm from "./components/TodoFrom"
import Todos from "./components/Todos"
import Axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {

const [todos, setTodos] = useState([]);

// this hook will load at the data
const loadData = async ()=>{

const {data} = await Axios.get("http://localhost:4000/getTodos");
  setTodos(data);
}

useEffect(()=>{
 
  loadData();
}
, [])

/// for adding
const addTodos =async todo=>{
    const {data} =  await Axios.post('http://localhost:4000/addTodo', {todo});
    loadData();
     toast(data, {type:"success"});
}

// delete todo
const markDelete =async (id)=>{

const {data}  = await Axios.post("http://localhost:4000/deleteTodo",{id});
toast(data, {type:"success"});
loadData();
}
// update todo 
const updateTodo = async todo=>{
  const {data}  = await Axios.post("http://localhost:4000/updateTodo",{todo});
  toast(data, {type:"success"});
  loadData();  
}

 return (
  <Container>
    <ToastContainer position="top-right"/>
    <h1>Todo App With CRUD Operations</h1>
    <TodoForm addTodos={addTodos}/>
    <Todos todos={todos} markDelete={markDelete} updateTodo={updateTodo}/>
  </Container>
  
  );
}

export default App;
