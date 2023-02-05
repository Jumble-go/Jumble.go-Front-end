
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '../LandingPagereact/grid';
import '../styleFolder/LandingPage.css';
import NavBar from '../LandingPagereact/Navbar';
import Uncontrolled from '../LandingPagereact/LandingImg';

function Landing() {
    return (
      <div className='Home'>
        <NavBar/>
        <Uncontrolled/>
        <Grid></Grid>
        <Button> Sign Up </Button>
      </div>
    );
  }

  export default Landing;
