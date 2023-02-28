import Card from 'react-bootstrap/Card';
import "../styleFolder/LandingPage.css"

function Textcard(props) {
  return (
    <Card className="Card-landing" style={{ width: '18rem'}}>
      <Card.Body >
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Textcard;