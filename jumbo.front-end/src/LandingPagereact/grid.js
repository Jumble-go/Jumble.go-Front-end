import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Textcard from './Landingpagecard';

function Grid() {
  return (
    <Container className='Grid-Container'>
      <Row className='Rows-1'>
        <Col className='colum1'>
          <Textcard></Textcard>
        </Col>
        <Col className='colum2'>
        <Textcard></Textcard>
        </Col>
        <Col className='colum3'>
        <Textcard></Textcard>
        </Col>
      </Row>
    </Container>
  );
}

export default Grid;