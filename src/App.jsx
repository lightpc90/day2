import React from 'react'
import Button from './Button'
import ButtonComponent from './ButtonComponent'

const App = () => {
  return (
    <div>
      <h1>Welcome to Home page</h1>
      <div className='flex items-center gap-4 mt-4'>
        <Button name={"Click Me"} />
        <Button name={"Submit"} />

        <ButtonComponent>
          <h1>header element</h1>
          <p>paragraph element</p>
        </ButtonComponent>
      </div>


      {/* calling without passing a prop */}
      <Button/>
    </div>
  )
}

export default App