import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';

function FooterText() {
  return (
    <div className='Footer-Form-email'>
      <InputGroup size="sm" className="mb-3">
        <Button>email here</Button>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
  );
}

export default FooterText;