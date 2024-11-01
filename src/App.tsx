import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";

import Home from './Pages/Home/index';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';

export default function App() {
  return (
    <div className='App'>
      <Router basename="">
        <Header />

        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router> 
    </div>
  )
}