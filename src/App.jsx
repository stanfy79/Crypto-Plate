import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Charts from './components/Charts'
import Home from './pages/Home'
import Earn from './pages/Earn'
import Grant from './pages/Grant'
import Error from './pages/Error'
import applogo from './assets/crypto-plate-resolution-logo.svg'
import './App.css'

function App() {

  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("scroll-animaton");
        } else {
            entry.target.classList.remove("scroll-animaton");
        }
    });
});
const animateContent = document.querySelectorAll(".show-scroll-animaton");
animateContent.forEach((el) => observer.observe(el));

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
            <div className="directions">
              <p>How to Earn?</p>
              <span><b>Earn: </b>Scan through the list to discover different organizations that allows you to mine crypto via their playform.</span>
            </div>
          </div>
        </div>
        
        <div className="main-content">
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/earn-crypto" element={<Earn/>} />
            <Route path="/grants" element={<Grant/>} />
            <Route path="/crypto-chart" element={<Charts/>} />
            <Route path='*' element={<Error/>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
