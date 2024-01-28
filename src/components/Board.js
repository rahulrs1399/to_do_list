import React from 'react'

const Board = ({task, index, taskList, setTaskList}) => {

  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTask => currentTask.filter(todo => index === removeIndex)))
  }

  return (
    <>
      <div className='max-w-lg flex flex-col items-center justify-center border text-center text-lg pt-3 pb-4 px-4 md:px-5'>
          <p>{task}</p> 
          <button className='px-3 py-1 border bg-red-500 rounded-lg' 
          onClick={handleDelete}
          >
            X
          </button>
      </div>
    </>
  )
}

export default Board