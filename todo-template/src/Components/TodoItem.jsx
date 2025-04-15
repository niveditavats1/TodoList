import '../style/todoitem.css';

const TodoItem = ({ task, onDelete }) => {
   
     return (
        <>
        <div className="todoitem">
        <button onClick={() => onDelete(task.id)}>X</button>
       <p> {task.text}</p>
       </div>
        </>
     )
}
export default TodoItem;