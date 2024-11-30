import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {

  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json1 = await res.json();
    setTodos(json1.getTodo);
  })


  return (  
    
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos= {todos}/>
      </div>
        
  )
}




export default App
