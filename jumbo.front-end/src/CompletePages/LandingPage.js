
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '../LandingPagereact/grid';
import '../styleFolder/LandingPage.css';
import NavBar from '../LandingPagereact/Navbar';
import Uncontrolled from '../LandingPagereact/LandingImg';
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from "react"
import Context from '../Context/Contex';

function Landing() {
  const navigate = useNavigate()
  
  
    return (
      <div className='Home'>
        <NavBar/>
        <Uncontrolled/>
        <h1 className='Intro'> Welcome To Jumble</h1>
        <h2 className='Intro.1'> Welcome To Jumble</h2>
        <Grid></Grid>
        <Button className='Home-Page-Button' onClick={()=>{navigate('/+Signup')}}> Sign Up </Button>
      </div>
    );
  }

  export default Landing;
