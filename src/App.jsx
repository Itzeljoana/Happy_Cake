import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './views/Homepage';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import Navigation from './components/Navigation';



const App = () => {
  return ( 
  <>
  <Navigation/>
  <Routes>
    <Route path = "/homepage" element={<HomePage/>} />
    <Route path = "/contact" element={<Contact/>} />
    <Route path = "*" element={<NotFound/>} />
  </Routes>
  </>
  );
};
export default App;