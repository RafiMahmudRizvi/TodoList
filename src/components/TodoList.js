import React from 'react'
import Todo from './Todo'

const TodoList = ({filterTodos, todos, setTodos }) => {
  return (
    <div className="todo-container">
       <ul className="todo-list">
           {filterTodos.map((item)=>{
             return(
              <Todo 
              item={item} 
              key={item.id}
              id={item.id}
              todos={todos}
              setTodos={setTodos}  
              />
               
             )
           })}
       </ul>
  </div>
  )
}

export default TodoList