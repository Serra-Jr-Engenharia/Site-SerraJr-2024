import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";

import Home from './Pages/Home/index';
import Sobre from './Pages/Sobre/index';
import Contato from './Pages/Contato/index';
import Header from './Components/Header/Main/index';
import Footer from './Components/Footer/index';

export default function App() {
  return (
    <div className='App'>
      <Router basename="">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quemSomos" element={<Sobre />} />
            <Route path="/contatos" element={<Contato />} />
        </Routes>
        <Footer />
      </Router> 
    </div>
  )
}