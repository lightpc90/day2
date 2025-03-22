import {useState} from 'react'

const ControlledForm = () => {
    const [name, setName] = useState('')
  return (
      <div className='flex flex-col'>
          <h1 className='text-3xl font-bold mt-6'>Controlled Form</h1>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
          className='border border-gray-400 w-[500px] p-2 rounded-md mt-3'
          />
          <p className='text-5xl font-bold mt-3'>{name}</p>
    </div>
  )
}

export default ControlledForm