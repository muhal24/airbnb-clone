import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";

function Header() {
    return (
        <div className='header'>
            <img className="header__icon" src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" alt="" />

           <div class="header__center">
             <input type="text" />
             <SearchIcon/>
           </div>
        <div class="header__right">
         <LanguageIcon/>
         <ExpandMoreIcon/>
         <Avatar/>
        </div>
        </div>
    )
}

export default Header;
