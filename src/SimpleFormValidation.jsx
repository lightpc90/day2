import { useState } from 'react'

const SimpleFormValidation = () => {
    const [firstname, setFirtname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

  const isFormDataValid = () => {
      return firstname && lastname && email && password
  }

    const handleSubmit = () => {
        if (isFormDataValid()) {
            // submit the form
            alert('Form submitted')
        } else {
            setError('Please fill out all fields')
        }
    }

    return (
        <div className='flex flex-col mt-12 ring-2 ring-gray-400 w-[600px] px-6 py-12 rounded-lg items-center'>
           
            {error && <p className='text-sm text-red-500'>{error}</p>}
           
            {/* First name */}
            <div>
                <label htmlFor='firstname' className='flex flex-col font-bold'>
                    First Name
                    <input
                        type='text'
                        id='firstname'
                        value={firstname}
                        placeholder='John'
                        onChange={e=>setFirtname(e.target.value)}
                        className='border border-gray-400 w-[500px] p-2 rounded-md mt-3'
                    />
                </label>
            </div>
            {/* last name */}
            <div>
                <label htmlFor='lastname' className='flex flex-col font-bold'>Last Name</label>
                <input
                    type='text'
                    id='lastname'
                    value={lastname}
                    placeholder='Doe'
                    onChange={e=>setLastname(e.target.value)}
                    className='border border-gray-400 w-[500px] p-2 rounded-md mt-3'
                />
            </div>
            {/* Email */}
            <div>
                <label htmlFor='email' className='flex flex-col font-bold'>Email</label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    placeholder='Doe'
                    onChange={e=>setEmail(e.target.value)}
                    className='border border-gray-400 w-[500px] p-2 rounded-md mt-3'
                />
            </div>
            {/* password */}
            <div>
                <label htmlFor='password' className='flex flex-col font-bold'>Password</label>
                <input
                    type='password'
                    id='password'
                    value={password}
                    placeholder='********'
                    onChange={e=>setPassword(e.target.value)}
                    className='border border-gray-400 w-[500px] p-2 rounded-md mt-3'
                />
            </div>
            <button onClick={handleSubmit} className='bg-blue-500 w-[150px] p-2 text-white rounded-md mt-4'>Submit</button>
        </div>
    )
}

export default SimpleFormValidation