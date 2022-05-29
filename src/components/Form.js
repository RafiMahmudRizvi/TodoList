import React from 'react'

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
  function inputTextHandeler(e) {
    setInputText(e.target.value);
  }
  
  function todoListHandeler(e) {
    e.preventDefault()
    if(inputText.length){
     setTodos([...todos, 
      {text:inputText,
       completed:false,
       id: Math.random()*1000
      }]);
      setInputText('')

    }
    
  }
  
 function stausHandeler(e) {
   setStatus(e.target.value)
 }

  return (
    <form>
        <input 
          type="text" 
          className="todo-input" 
          value={inputText}
          onChange={inputTextHandeler}  
          />
        <button 
          className="todo-button" 
          type="submit"
          onClick={todoListHandeler}
          >
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={stausHandeler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form