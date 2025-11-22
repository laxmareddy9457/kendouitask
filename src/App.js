
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';


function App() {
  return (
    <BrowserRouter className='main'>
      <Routes>
        <Route path='/' element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
