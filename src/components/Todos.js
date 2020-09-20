import React from "react"
import {ListGroup, ListGroupItem} from "reactstrap"
import {FaTrash, FaPencilAlt} from "react-icons/fa"

const Todos = ({todos, markDelete, updateTodo})=>{

    
    const handleUpdate = (todo)=>{
        

        if(todo.todoString==="")
        return alert("Please enter todo");

          updateTodo(todo)
        }

    const updatePrompt = (item)=> {
        var dataPrompt = prompt(`Update Todo \nId:${item.id} `, item.todoString);
        if (dataPrompt != null) {
          item.todoString = dataPrompt;
          handleUpdate(item);
        }
      }
   
   
    return(
     <ListGroup className="mt-5 mb-2 items">
       {
           todos.map((item, index)=>(
              <ListGroupItem key={item.id} >
                {item.todoString}
                <span className="float-right pl-2" onClick={()=>markDelete(item.id)} style={{cursor:"pointer"}} >
                   <FaTrash/>
                      </span>
                      <span className="float-right" onClick={()=>updatePrompt(item,  index)} style={{cursor:"pointer"}}>
                      <FaPencilAlt/>
                      </span>
                     
            </ListGroupItem>
           ))}
     </ListGroup>
    )
}

export default Todos;