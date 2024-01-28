import Input from './components/Input';
import Board from './components/Board';
import { useState } from 'react';

function App() {

  const [taskList, setTaskList] = useState([]);

  return (
    <div className="px-12">
      <div className='flex flex-col gap-4 items-center justify-center py-8'>
        <h1 className=' text-xl font-bold py-4'>To do list</h1>
        <Input taskList={taskList} setTaskList={setTaskList}/>
      </div>
      <hr className='py-3'></hr>
        <div className=' flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12'>
          {taskList.map((task, index) =>
            <Board 
              key={index}
              index={index}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
            />         
            )}
        </div>
    </div>
  );
}

export default App;
