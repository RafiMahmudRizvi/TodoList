import React from 'react'

const Todo = ({id, item, todos,  setTodos}) => {

  function deleteHandeler(params) {
    setTodos(todos.filter(el => el.id !== id))
  }
  
  function completeHandeler() {
    setTodos(todos.map((item)=>{
      if(item.id === id){
        return{
          ...item,
          completed:!item.completed
        }
      }
      return item;
    }))


  }

  return (
    <div className='todo'>
        <li className={`todo-item ${item.completed ? "completed" : ''}`}>{item.text}</li>
        <button 
          className=' complete-btn'
          onClick={completeHandeler}
          >
          {item.completed ?<i class="fas fa-undo"></i>:<i className='fas fa-check'></i>}</button>
        <button 
          className='trash-btn'
          onClick={deleteHandeler}
        ><i className='fas fa-trash'></i></button>

    </div>
  )
}

export default Todo