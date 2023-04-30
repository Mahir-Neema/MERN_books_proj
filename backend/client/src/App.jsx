import { useState } from 'react'
import './App.css'
import ColorSchemesExample from './components/Navbar'
import AddBook from './components/AddBook'
import TextExample from './components/ViewBook'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ColorSchemesExample/> */}
      {/* <AddBook/> */}
      <Alert variant="success">
        <Alert.Heading style={{textAlign:"center"}}>Add Search View Delete Books</Alert.Heading>
      </Alert>

      <div style={{display:"flex",justifyContent:"center"}}>
      <Link to='/viewbook'> 
        <Button variant="primary" size="lg" active>
              View Books
        </Button>
      </Link>
      </div>

    </>
  )
}

export default App
