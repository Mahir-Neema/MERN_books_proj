import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './ViewBook.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
// const API_URL = process.env.API_URL;



function ViewBook() {

  const [books, setBooks] = useState([]);
  const [queryname,setqueryname] = useState('');

  const [erroralert,seterroralert] = useState(false);
  const [alert,setalert] = useState(false);
  const color = [
    '#cfe2ff',
    '#e2e3e5',
    '#d1e7dd',
    '#f8d7da',
    '#fff3cd',
    '#cff4fc',
    '#fefefe',
    '#d3d3d4',
  ]

  useEffect(() => {
      axios.get(`http://localhost:3000/books/search?q=${queryname}`).then((response)=>{
        if(response.data.length > 0){
            setBooks(response.data);
        } 
    })
    .catch((e)=> {
      console.log("can't fetch books"+e);
    })
  }, [queryname]);

  const deleteBook = (id) =>{
    console.log(id+" deleted");
    axios.delete(`http://localhost:3000/books/${id}`)
    .then((res) => {
      console.log(res.data);
      setalert(true);
    })
    .catch((err) => {
      console.error("error occured button not working"+err);
      seterroralert(true);
    });

    setTimeout(() => {
      setalert(false);
      seterroralert(false);
      window.location.reload()
    }, 1000)
  }

  return (<>
    <div style={{width:"60%", marginLeft:"auto", marginRight:"auto",marginTop:"30px"}}>
      <Alert variant="success">
        <Alert.Heading style={{textAlign:"center"}}>Books</Alert.Heading>
      </Alert>

      <Form>
            <fieldset>
                <Form.Group className="mb-3">
                    <Form.Label>Search</Form.Label>
                    <Form.Control  placeholder="Search Books or author" onChange={(e)=>setqueryname(e.target.value)}/>
                </Form.Group>
            </fieldset>
       </Form>

       {alert&&<Alert key='success' variant='success'>
          Book deleted successfully
        </Alert>}
        {erroralert&&<Alert key='danger' variant='danger'>
          Error Occured while deleting Book
        </Alert>}

      <div className='book-grid'>
        {books.map((book,index) => (
              <Card key={book._id} style={{ width: '250px', backgroundColor: color[index%8] }}>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Author: {book.author}</Card.Subtitle>
                  <Button variant="warning" text="dark" size="sm" onClick={()=>deleteBook(book._id)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
          ))}

        <Card style={{ width: '250px' }}>
          <Card.Body>
            <Card.Title>Test Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> Test Author</Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    </div>
    </>
  );
}

export default ViewBook;