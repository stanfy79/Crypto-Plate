import '../App.css'
import applogo2 from '../assets/crypto-plate-resolution-logo.svg'

export default function Footer() {

    return (
        <>

        <div className="footer-container">
        <div className="footer-bg-dimmer">
      <header className="footer-header">
        <img src={applogo2} className="footer-logo" alt="logo" />
        <p>
        Thank you for visiting our site. We provide insights on crypto grants, mining, and earning opportunities. Stay tuned for updates and join us in exploring the world of cryptocurrency. 🏆
        </p>
      </header>
    <h2>Contributors</h2>
      <div className="contributors">
       <a href="https://x.com/stanfyhack" target="_blank" rel="noopener noreferrer">
       <Profile title="Web3 App Developer" follow="@X" img="https://pbs.twimg.com/profile_images/1688667261547016192/V-J2pPhW_400x400.jpg" />
       </a>
       <a href="https://x.com/damntradefreak" target="_blank" rel="noopener noreferrer">
        <Profile title="Blockchain Expert and Developer" follow="@X" img="https://pbs.twimg.com/profile_images/1777557623799234560/sze0b-vE_400x400.jpg" />
       </a>
      </div>
      <footer>
        <h3>We've got you covered</h3>
      </footer>
      </div>
    </div>

        </>
    )
}

function Profile({ img, title, follow }) {
    return (
      <div className="profile">
        <img src={img} alt="Contributor" className="profile-img" />
        <p>{title}</p>
        <p>Follow at {follow}</p>
      </div>
    );
  }