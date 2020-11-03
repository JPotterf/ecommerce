import React from 'react'
import './Header.css'
import logo from './templogo.PNG'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="logo" className="header__logo"/>
            <div className="header__search">
                <input className="header__searchInput"  type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Account</span>
                </div>

                <div className="header__optionsBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header   
