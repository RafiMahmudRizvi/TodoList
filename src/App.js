import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [filterTodos, setFilterTodos] = useState([])
  const [status, setStatus] = useState('all')

  useEffect(()=>{
    filterTodoList()
  },[todos, status])
 
  function filterTodoList(){
    switch(status){
       case 'completed':
         setFilterTodos(todos.filter(item => item.completed))
       break;
       case 'uncompleted':
         setFilterTodos(todos.filter(item => !item.completed))
       break;
       default:
         setFilterTodos(todos)

    }
 }

  return (
    <div >
          <Header />

          <Form 
            setInputText={setInputText}
            setTodos={setTodos}
            inputText={inputText}
            todos={todos}
            setStatus={setStatus}
            />

          <TodoList 
            filterTodos={filterTodos}
            todos={todos}
            setTodos={setTodos}  
            />
    </div>
  );
}

export default App;
