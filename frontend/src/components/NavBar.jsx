import React from 'react'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import data from '../restApi.json'

const NavBar = () => {
  const [show, setShow] = React.useState(false)

  // Extract navbarLinks from JSON data structure safely
  const navLinks = data?.data?.[0]?.navbarLinks || data?.[0]?.navbarLinks || []

  return (
    <nav className="navbar">
      <div className="logo">
        <img src='./FoodAndFriends.png' alt='Food&Friends'/>
      </div>
      
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {navLinks.map((element) => (
            <Link 
              to={element.link} 
              key={element.id} 
              spy={true} 
              smooth={true} 
              duration={500}
            >
              {element.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="navBtns">
        <button className="menuBtn">OUR MENU</button>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  )
}

export default NavBar