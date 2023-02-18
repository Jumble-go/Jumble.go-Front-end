import Nav from 'react-bootstrap/Nav';
import FooterText from './footerText';

function Footer() {
  return (
    <div style={{backgroundColor: "#82A6B1"}}>
      <p className="text-center mt-4 mb-4">Or right-aligned</p>
      <div className='Text-Form'>
      <FooterText></FooterText>
      </div> 
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Footer;