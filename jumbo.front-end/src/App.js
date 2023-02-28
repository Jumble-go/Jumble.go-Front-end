import { Route, Routes } from 'react-router-dom'
import Landing from "./CompletePages/LandingPage";
import LoginForm from './LogInreact/form';
import BasicSignup from './CompletePages/Signup/Signup';
import ResponsiveDrawer from './HomePage/HomePage';
import TestDrawer from './HomePage/HomePage';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/+Signup' element={<BasicSignup/>} />
      <Route path='/Login' element={<LoginForm />} />
      <Route path='/Home' element={<TestDrawer/>} />

    </Routes>
  );
}

export default App;
