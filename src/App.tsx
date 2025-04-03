import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";

import Home from './Pages/Home/index';
import Sobre from './Pages/Sobre/index';
import Contato from './Pages/Contato/index';
import Header from './Components/Header/Main/index';
import Footer from './Components/Footer/index';
import Computacao from './Pages/Computacao/index';
import Mecanica from './Pages/Mecanica/index';
import SerraLab from './Pages/SerraLab/index'
import ErrorPage from './Pages/ErrorPage/index'
import ScrollToTop from './Components/ScrollToTop';

export default function App() {
  return (
    <div className='App'>
      <Router basename="">
        <ScrollToTop />
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SobreNos" element={<Sobre />} />
            <Route path="/contatos" element={<Contato />} />
            <Route path="/computacao" element={<Computacao />} />
            <Route path="/mecanica" element={<Mecanica />} />
            <Route path="/serraLab" element={<SerraLab />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router> 
    </div>
  )
}