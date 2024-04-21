
import{Routes,Route}from 'react-router-dom';

import Contact from './Components/Contact';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Crud from './Components/Crud';
function App() {
  return (
    <>
    <Routes>
    
    <Route path='/' element={ <Header/>}/>
    <Route path='/home' element={ <Home/>}/>
    <Route path='/about' element={ <About/>}/>
    <Route path='/login' element={ <Login/>}/>
    <Route path='/register' element={ <Register/>}/>
    <Route path='/contact' element={ <Contact/>}/>
    </Routes>
    <Crud/>
    </>
  );
}

export default App;
