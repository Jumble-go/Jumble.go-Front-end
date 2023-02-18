import { Route, Routes } from 'react-router-dom'
import Landing from "./CompletePages/LandingPage";
import LoginForm from './LogInreact/form';
import BasicSignup from './Signup/Signup';

function App() {
  return (
    <Routes>
      <Route path='/Home' element={<Landing />} />
      <Route path='/+Signup' element={<BasicSignup/>} />
      <Route path='/Login' element={<LoginForm />} />
    </Routes>
  );
}

export default App;
