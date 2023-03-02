import Card from 'react-bootstrap/Card';

function WithHeaderAndQuoteExample(props) {
  return (
    <Card style={{height: 'auto'}}>
      <Card.Body  style={{marginBottom: '0px',
    paddind: '0px'}}>
        <blockquote className="blockquote mb-0" style={{display: 'flex', alignItems: 'baseline',
flexDirection: 'column'
      }}>
          <p style={{fontSize: '16px', wordBreak: 'break-all', whiteSpace: 'normal'}}>
            {' '}
            jflksjflksjfldkjskldjfklsdjflkjdfdsklfksjdfksjdfklsjfklsjfklsdjflksjdfklsjfsjldkksjfjsdlfjslkfjsklfjskldfjsklfjklsfjlsdfkj
            {' '}
          </p>
          <footer className="blockquote-footer" style={{fontSize: '16px', marginBottom: '0px'}}>
            Someone famous in 
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderAndQuoteExample;