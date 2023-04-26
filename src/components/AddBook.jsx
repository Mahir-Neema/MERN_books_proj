import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddBook() {
  return (
    <div style={{width:"50%", marginLeft:"auto", marginRight:"auto",marginTop:"30px"}}>
        <Form>
            <fieldset>
                <Form.Group className="mb-3">
                    <Form.Label>Dissabled input</Form.Label>
                    <Form.Control  placeholder="Disabled input" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                    <Form.Select id="Select">
                        <option>Disabled select</option>
                    </Form.Select>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </fieldset>
        </Form>
    </div>
  );
}

export default AddBook;