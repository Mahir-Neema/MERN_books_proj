import { useState } from 'react'
import './App.css'
import ColorSchemesExample from './components/Navbar'
import AddBook from './components/AddBook'
import TextExample from './components/ViewBook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorSchemesExample/>
      
      {/* <AddBook/> */}
    </>
  )
}

export default App
