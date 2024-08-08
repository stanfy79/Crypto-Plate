import '../App.css'
import { Link } from 'react-router-dom'
import appLogo from '../assets/crypto-plate-resolution-logo.svg'

export default function SideMenu() {

    
    return (
        <>
        <div className="first-menu-section">
            <div>
                <img src={appLogo} alt="Logo" />
            </div>
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
        </>
    )
}