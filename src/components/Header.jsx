import '../App.css'
import { Link } from 'react-router-dom'
import appLogo from '../assets/crypto-plate-transparent.svg'
import menuIcon1 from '../assets/menu-alt-1.svg'
import menuIcon2 from '../assets/arrow-left-r.svg'

export default function Header() {

//     // change theme background, toggle button function 
// const toggleBtn = document.querySelector('.checkbox')

// toggleBtn.addEventListener('change', function() {
//     if(this.checked) {
//       document.documentElement.style.setProperty('--theme-text', 'white')
//         document.documentElement.style.setProperty('--theme-background', 'black');
//     } else {
//       document.documentElement.style.setProperty('--theme-background', '#fcfcfc')
//       document.documentElement.style.setProperty('--theme-text', 'black');
//     }
// })

function displayMenu() {
  const menuContainer = document.querySelector(".side-menu")
  const menuIconState = document.querySelector(".menu-icon img")
  
  if(menuContainer.style.right === "-100%") {
    menuContainer.style.right = "0%";
    menuIconState.setAttribute("src", menuIcon2)
  } else {
    menuContainer.style.right = "-100%";
    menuIconState.setAttribute("src", menuIcon1)
  }
}

  return (
    <>
      <section>
        <div className="top-header">
          <div className="top-header-child">
            <span className='app-logo'>
              <img src={appLogo} alt="Logo" />
            </span>
          <div className="second-menu-section">
            <div className='menu-icon' onClick={displayMenu}>
              <img src={menuIcon1} alt="Menu" />
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

