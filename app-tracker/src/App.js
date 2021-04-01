import "./App.css";
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Laundry",
      day: "Feb 6th at 3:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Shopping",
      day: "Feb 7th at 4:00pm",
      reminder: false,
    },
  ]); 

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !==id))
  }

  const toggleReminder =(id) => {
    console.log(id)
  }

  return (
    <div className="container">
     <Header/>
     {tasks.length > 0 ?<Tasks tasks ={tasks} onDelete= {deleteTask} onToggle={toggleReminder}/> : 'NO TASK TO SHOW'}
    </div>
  );
}

export default App;
 