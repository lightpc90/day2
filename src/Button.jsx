import React from 'react'

const Button = ({ name="Button" }) => {
  return (
    <button className={`py-2 px-4 bg-blue-500 rounded-md text-white hover:bg-blue-600`}>{name}</button>
  )
}

export default Button