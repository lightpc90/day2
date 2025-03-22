import React, { useState } from 'react'

const Count = () => {
const [count, setCount] = useState(0)
  const addCount = () => {
      // setCount(count + 1)
      setCount(prevCount => prevCount + 1)
  }

  const subtractCount = () => {
    if (count < 1) return
    setCount(count - 1)
  }

  return (
      <div>
          <h1 className='text-3xl font-bold '>React State Hooks</h1>
          <p className='text-5xl font-bold mt-6'>Count: {count}</p>
          <button onClick={addCount} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 mr-6'>
              Add 1
          </button>
          <button onClick={subtractCount} className='bg-rose-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6'>
              Sub 1
          </button>
      </div>
  )
}

export default Count