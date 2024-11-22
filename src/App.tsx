import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";

import Home from './Pages/Home/index';
import Header from './Components/Header/Main/index';
import Footer from './Components/Footer/index';
import GearsBackground from './Pages/Home/Components/GearsBackground';

export default function App() {
  return (
    <div className='App'>
      <Router basename="">
        <Header />
        <GearsBackground />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router> 
    </div>
  )
}