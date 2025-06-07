import { useState, useEffect } from "react"
import { RiDeleteBinFill } from "react-icons/ri";

const App = () => {
  console.log("first line to run")
  const [todoList, setTodoList] = useState([])
  const [title, setTitle] = useState('')
  const [mounted, setMounted] = useState(false)
  
  const getStoredTodos = () => {
    if (typeof window !== "undefined") {
      console.log("trying to get data...")
      const storedTodo = localStorage.getItem("todo")
      if (storedTodo) {
        console.log("return from getStored: ", JSON.parse(storedTodo) )
        return JSON.parse(storedTodo)
      }
      return null
    }
  }
  // to read existing data from localStorage
  useEffect(() => {
    const storedTodo = getStoredTodos()
    console.log("return data inside effect.. ", storedTodo)
    if (storedTodo) {
      setTodoList(storedTodo)
    }
    setMounted(true)
  }, [])
  
  console.log("fetched todo: ", todoList)

  // to store data to localStorage
  useEffect(() => { 
    if (mounted) { 
      console.log("It is mounted")
      localStorage.setItem("todo", JSON.stringify(todoList))
      console.log("storing: ", JSON.stringify(todoList))
    }
  }, [todoList, setTodoList])
  

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const addTodo = () => {
    if(!title)return
    setTodoList((prev) => [...prev, { title: title, completed: false }])
    setTitle("")
  }

  const handleCompletedToggle = (index) => {
    setTodoList(todoList.map((todo, i) => i === index ?
      {...todo, completed: !todo.completed}: todo))
  }

  const handleDelete = (index) => {
    let activeList = todoList.filter((todo, i)=>i!==index)
    setTodoList(activeList)
  }

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">

      {/* card */}
      <div className="w-full h-full flex flex-col gap-2 ">
        {/* title and form */}
        <div className="bg-sky-800 w-[90%] h-[150px] text-white flex flex-col justify-center items-center">
          {/*  */}
          <h1 className="text-xl font-bold">Todo App</h1>
          <div className="flex flex-col">
            <input
              value={title}
              onChange={handleChange}
              type="text" name="newTodo" className="py-1 px-2 border-[2px] rounded-md my-2  border-sky-400 " />
            <button
              onClick={addTodo}
              className="bg-sky-700 w-full p-2 rounded-md my-1">Add New Todo</button>
          </div>
        </div>
        {/* todo list */}
        <div className="bg-sky-200 w-[90%] h-[600px] rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold text-sky-800">My Todo Tasks</h2>

          {/* List is rendered here */}
          <ul className="my-4 space-y-2 w-full">
            {todoList.length > 0 ?
              todoList.map((todo, i) => (
                <li key={i} className={`flex justify-between gap-2 rounded-md  p-2 ${todo.completed ? "bg-zinc-100" : "bg-sky-300 shadow-md"}`}>
                  <h3 className={` ${todo.completed ? "text-gray-400" : "font-semibold"}`}>{todo.title}</h3>
                  <div className="flex gap-2 items-center">
                    {/* completed checkbox */}
                    <input type="checkbox" value={todoList[i].completed}
                      onChange={() => handleCompletedToggle(i)}
                    />
                    <span
                      onClick={()=>handleDelete(i)}
                      className="text-rose-900">
                      <RiDeleteBinFill />
                    </span>
                  </div>
                </li>
              )) : <div className="w-full h-full text-center  ">Empty Tasks</div>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App