import Card from 'react-bootstrap/Card';

function WithHeaderAndQuoteExample(props) {
  return (
    <Card style={{height: '105px'}}>
      <Card.Body  style={{marginBottom: '0px',
    paddind: '0px'}}>
        <blockquote className="blockquote mb-0">
          <p style={{fontSize: '16px'}}>
            {' '}
            ksldjasjdfjlasdfljsdfjsldjflksjdlfjsldjflslksldfllkjlk
            {' '}
          </p>
          <footer className="blockquote-footer" style={{fontSize: '16px'}}>
            Someone famous in 
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderAndQuoteExample;