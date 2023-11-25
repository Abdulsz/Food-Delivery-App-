import React, { useEffect } from 'react'
import {} from "@mui/material";
import {BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';
function Header() {


    useEffect(() =>{
        const toggleMenu = document.querySelector(".toggleMenu");

        toggleMenu.addEventListener('click', () =>{
            document.querySelector('.rightMenu').classList.toggle('active');
        });
    }, []);
  return (
    <header>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_ygWnvy9A2qqDg54y8o7g9nlluP0o-zwgowxe0zMOEh_gyyEUGP2givBh4P2Hb9tC7g&usqp=CAU" 
        alt=""className="logo"/>

        <div className="inputBox">
            <SearchRounded className="searchIcon"/>
            <input type = "text" placeholder="Search"/>
            
        </div>

        <div className="shoppingCart">
            <ShoppingCartRounded className="cart"/>
            <div className="cart_content">
                <p>2</p>  
            </div>
        </div>
        <div className="profileContainer">
            <div className="imgBox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Nd6zI55tEog6MXBbxvljrnrI-2SYxXsp0w&usqp=CAU"
                 alt=""
                 className='profilePic'/>
            </div>

            <h2 className="userName">Zak</h2>
        </div>
        <div className="toggleMenu">
            <BarChart className="toggleIcon"/>
        </div>
         
    </header>
  );
}

export default Header;