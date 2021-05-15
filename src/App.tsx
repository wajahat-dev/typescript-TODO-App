import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {ITask} from './interfaces'
import TodoTask from './Components/TodoTask'

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todolist, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void=>{
    if(event.target.name === "task"){
      setTask(event.target.value)  
     
    }else{
      setDeadline(Number(event.target.value))     
    }
  }
  
  

  const addTask = (e: any): void=>{
    e.preventDefault();
    const newTask = {
      taskname: task,
      deadline: deadline
    }
    setTodoList([...todolist,newTask])
    setTask("")
    setDeadline(0)
  }

   const deleteTask = (id: number)=>{
      console.log(id)
      const filter = todolist.filter((_,index:number) => (index !== id) )
      setTodoList(filter)
    }

  return (
    <div className="App">
      <div className="header">
        <form className="form1" onSubmit={addTask}>
        <div className="inputContainer">
          <input type="text" 
          onChange={handleChange} 
          name="task"
          value={task}
          placeholder="Task..." required />
          
          <input 
          type="number" 
          onChange={handleChange} 
          name="deadline"
          value={deadline}
          placeholder="Deadline in Days..." 
          required />

        </div>
       <div>
       <button >Add Task</button>
       </div>
        </form>
      </div>
      <div className="todoList">
        {
          todolist.map((task: ITask, index: number) =>{
            return <TodoTask task={task} deleteTask={deleteTask} id={index} key={index}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
