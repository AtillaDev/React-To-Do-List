import React from 'react'

function ToDoList() {
  const [tasks, setTasks] = React.useState(["Walk the dog", "Eat breakfast", "Go to work"])

  let tasksEl = tasks.map((task, index) => {
  // console.log(index)
    return(
  <li className='task' key={index}>
    <h4 className='task-tittle'>{task}</h4>
    <div className="task-btn-wrapper">
      <button className='task-pagination-btn' onClick={() => {moveTaskUp(index)}}>↑</button>
      <button className='task-pagination-btn' onClick={() => {moveTaskDown(index)}}>↓</button>
      <button className='task-delete-btn' onClick={() => {deleteTask(index)}}>Delete</button>
    </div>
  </li>
  )})

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => index !== i))
  }

  function addTask(e) {
    const taskInput = document.getElementById("taskInput")
    
    if(taskInput.value){
      setTasks([...tasks, taskInput.value])
    }
    taskInput.value = ""
  }

  function moveTaskUp(index) {
    // If it's the first item, do nothing
    if (index === 0) return;
    
    setTasks(prevTasks => {
      const newTasks = [...tasks];
      // Swap the current task with the one above it
      [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
      return newTasks;
    });
  }

  function moveTaskDown(index) {
    // If it's the last item, do nothing
    if (index === tasks.length - 1) return;
    
    setTasks(prevTasks => {
      const newTasks = [...prevTasks];
      // Swap the current task with the one below it
      [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
      return newTasks;
    });
  }


  return (
    <div className='to-do-list'>
        <h1 className='tittle'>To-do List</h1>
        <div className='task-input'>
          <input className='task-input-field' type="text" id='taskInput'/>
          <input className='task-input-btn' value="Add"  onClick={addTask} />
        </div>
        <ul className="tasks">{tasksEl}</ul>
    </div>
  )
}

export default ToDoList