import {useState} from 'react'

const Input = ({taskList, setTaskList}) => {

    const [input, setInput] = useState("")

    const handleAddTask = (e) => {
        e.preventDefault();
        setTaskList([...taskList, input]);
        setInput("");
    }

  return (
    <>
        <form className='flex flex-row justify-center items-center gap-3'>
            <input
                className='border rounded-lg px-3 py-1.5 text-lg'
                type='text'
                placeholder='Add a task'
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button
                className=' bg-violet-400 text-white px-3.5 py-2 border rounded-md font-semibold hover:opacity-70'
                onClick={(e)=>handleAddTask(e)}
            >
                Add
            </button>
        </form>
    </>
  )
}

export default Input