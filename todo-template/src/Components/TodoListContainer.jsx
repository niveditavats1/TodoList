import '../style/todolistcontainer.css';
import { useState } from 'react';
import TodoItem from './TodoItem'


const TodoListContainer = () => {
    const [todolist, setTodolist] = useState([]); //This is a list of JavaScript object.  Each object has a id and a text i.e. {id: "2025-03-10T8:00:00", text: "This is my task"}
    const [input,setInput] = useState("");

    const addTodoItem = () => {
        if (input.trim() === "") return;
        setTodolist([...todolist, { id: Date.now(), text: input }]);
        setInput("");
    }

    return (
        <>
        <div className='todolistcontainer'>
        <h1>TODO List</h1>
        <input className="todoinput" 
        type='text' 
        value={input}
        placeholder ='Enter Task Here...'
        onChange={(e) => setInput(e.target.value)}
        />
        <button className="todobutton" onClick={addTodoItem}>Add</button>
        <br />
        <h2>My Tasks</h2>
        <br />
        {   todolist.length === 0 ? <p>No Tasks available!</p> : 
            todolist.map(todo => (
                <TodoItem key={todo.id} task={todo.text} />
            ))
        }
        
        </div>
        </>
    );
}

export default TodoListContainer;