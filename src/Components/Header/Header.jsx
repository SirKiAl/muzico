import "../Header/Header.scss"
import logo from "./header/logo.png"
import HeaderUserMenu from "./UserMenu/UserMenu.jsx"
import Search from './Search/Search';

function Header() {
   return (
      <header className="main-header">
         <div className="main-header__container ">
            <a href="" className="main-header__logo"><img src={logo} alt="logotype" /></a>
            <Search />

            <div className="main-header__collection"><a href="#">Моя коллекция</a></div>
            <HeaderUserMenu />
         </div>
      </header>
   )
}

export default Header;