import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
const API_URL = 'http://localhost:3000';

function AddBook() {
    const [book,setbook] = useState('');
    const [author,setauthor] = useState(''); 
    const [erroralert,seterroralert] = useState(false);
    const [alert,setalert] = useState(false);

    const AddBook = (e) =>{
        e.preventDefault()
        const bookdata = {
            title: book,
            author: author
        };
        console.log(bookdata);
        setbook('');
        setauthor('');
        axios.post(`${API_URL}/books`, bookdata).then(
            (res) => {console.log(res.data),setalert(true);}
        ).catch(
            ()=> seterroralert(true)
        );

        setTimeout(() => {
            setalert(false);
            seterroralert(false);
        }, 5000);
    }
  return (
    <div style={{width:"50%", marginLeft:"auto", marginRight:"auto",marginTop:"30px"}}>
        {alert&&<Alert key='success' variant='success'>
          Book Added
        </Alert>}
        {erroralert&&<Alert key='danger' variant='danger'>
          Error Occured while adding Book
        </Alert>}
        <Form onSubmit={AddBook}>
            <fieldset>
                <Form.Group className="mb-3">
                    <Form.Label>Add Book {book}</Form.Label>
                    <Form.Control  placeholder="Book Title" onChange={(e)=>setbook(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Add Author {author}</Form.Label>
                    <Form.Control  placeholder="Author Title" onChange={(e)=>setauthor(e.target.value)} />
                </Form.Group>

                <Button type="submit" onClick={AddBook}>Submit</Button>
            </fieldset>
        </Form>
    </div>
  );
}

export default AddBook;