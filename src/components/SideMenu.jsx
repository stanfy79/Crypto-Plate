import './App.css'
import { Link } from 'react-router-dom'
import appLogo from '../assets/crypto-plate-transparent.svg'

export default function SideMenu() {

    
    return (
        <>
        <div>
            <span className='app-logo'>
              <img src={appLogo} alt="Logo" />
            </span>
        </div>
        <div className="first-menu-section">
            <span className="effect">
                <Link to="/">Explore</Link>
            </span>
            <span className="effect">
                <Link to="/earn-crypto">Earn</Link>
            </span>
            <span className="effect">
              <Link to="/grants">Grant</Link>
            </span>
            <span className="effect"><Link to="/multiswap">Multi Swap</Link></span>
        </div>
        <div className="second-menu-section">
            <div className='menu-icon' onClick={displayMenu}>
              <img src={menuIcon1} alt="Menu" />
            </div>
        </div>
        </>
    )
}