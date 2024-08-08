import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Footer from './components/Footer'
import Charts from './components/Charts'
import Home from './pages/Home'
import Earn from './pages/Earn'
import Grant from './pages/Grant'
import Swap from './pages/TokenSwap'
import Error from './pages/Error'
import './App.css'

function App() {


  return (
    <>
      <Header />
      <div className="page-wrapper">
        <div className="side-menu">
          <SideMenu />
        </div>
        
        <div className="main-content">
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/earn-crypto" element={<Earn/>} />
            <Route path="/grants" element={<Grant/>} />
            <Route path="/crypto-chart" element={<Charts/>} />
            <Route path="/multiswap" element={<Swap/>} />
            
            <Route path='*' element={<Error/>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
