import "./NavBar.scss"
import logo from "@/../../public/assets/logo.png"
import openMenu from "@/../../public/assets/menu.png"
import closeMenu from "@/../../public/assets/close.png"
import search from "@/../../public/assets/search.png"
import shoppingBag from "@/../../public/assets/shopping-bag.png"



export const NavBar = ({ state, toggle }) => {

  return (
    <div className="nav">
      <div className="hamburguer" onClick={toggle}>
        {!state ? <img className="menu-icon" src={openMenu} alt="Open menu" /> : <img className="menu-icon" src={closeMenu} alt="Close menu" />}
      </div>
      <img className="logo" src={logo} alt="Stock Energy Socks Logo" />
      <div className="icons">
        <img className="menu-icon icon-margin" src={search} alt="Search bar" />
        <img className="menu-icon icon-margin" src={shoppingBag} alt="Shopping cart" />
      </div>
    </div>
  )
}
