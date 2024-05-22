import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Earn from './pages/Earn'
import Grant from './pages/Grant'
import applogo from './assets/crypto-plate-resolution-logo.svg'
import './App.css'

function App() {


  return (
    <>
      <Header />
      <div className="page-wrapper">
        <div className="side-menu">
          <h2><img src={applogo} alt="Logo" /></h2>
          <div className="menu-intro">
            <div className="directions">
              <p>How to Explore?</p>
              <span><b>Home Page: </b>Find blog articles that tells you all about crypto.</span>
            </div>
          </div>
        </div>
      
        <div className="main-content">
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/earn-crypto" element={<Earn/>} />
            <Route path="/grants" element={<Grant/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
