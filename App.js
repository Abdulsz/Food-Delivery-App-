import { AccountBalanceWalletRounded, Chat, Favorite, Home, HomeRounded, Settings, SummarizeRounded} from '@mui/icons-material';
import './App.css';
import Header from "./Components/Header";
import MenuContainer from './Components/MenuContainer';
import { useEffect, useState } from 'react';
import BannerName from "./Components/BannerName";
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from "./Components/MenuCard";
import {MenuItems, Items} from "./Components/data"
import { Menu } from '@mui/material';
import ItemCard from './Components/ItemCard';
import DebitCard from './Components/DebitCard';
import CartItem from './Components/CartItem';
import { useStateValue } from './Components/StateProvider';
function App() {


  // Main Dish State
  const[isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "burger01")
  );

  const [{cart, total}, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li');

    function setMenuActive(){
      menuLi.forEach((n)=> n.classList.remove("active"))
      this.classList.add("active");  
    }

    menuLi.forEach((n)=> n.addEventListener("click", setMenuActive));
    
    // Menucard Active toggle.
    const menuCard = document
    .querySelector(".rowContainer")
    .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n)=> n.classList.remove("active"));
      this.classList.add("active");  
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, cart, total, totalPrice]);


  //set main dist items on filter

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId == itemId))
  };


  return (
      <div className="App">

        {/* Header section */}
        <Header />
        {/* Main Container */}
        <main>
          <div className='mainContainer'>
            {/* Banner */}
            <div className='banner'>
              <BannerName name={"Zak"} discount={"20"} link={"#"} />
              <img src="https://firebasestorage.googleapis.com/v0/b/fooddelivery-6176f.appspot.com/o/fooddelivery%20pictures%2Fimageedit_1_8916539404.png?alt=media&token=1ae557b0-1a90-4ad0-a1b7-d59b9f543f3b"
              alt=""
              className='deliveryPic'
              />
            </div> 
            {/*dishContainer*/}
            <div className='dishContainer'>
              <div className='menuCard'>
                <SubMenuContainer />
              </div>

              <div className='rowContainer'>

                {MenuItems && 
                  MenuItems.map((data) =>(
                    <div key={data.id} onClick = { () => setData(data.itemId)}>
                    <MenuCard  
                      imgSrc={data.imgSrc} 
                      name={data.name}
                      isActive = {data.id == "1" ? true: false}
                    />
                </div>

                ))}
              </div>

              <div className='dishitemContainer'>
                {
                  isMainData && isMainData.map(data => (
                    <ItemCard 
                    key={data.id}
                    imgSrc= {data.imgSrc} 
                    name = {data.name}  ratings={data.ratings} price= {data.price} />

                  
                    ))}

                  
              </div>


            </div>
          </div>
          <div className='rightMenu'>
             <div className='debitCardContainer'>
              <div className='debitCard'>
                <DebitCard />
              </div>
             </div>

             {!cart ? (
             <div className="addSomeItem">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              />
             </div> 
             ):(
             
             

             <div className="cartCheckOutContainer">
            
              <div className="cartContainer">
                 <SubMenuContainer  />
                <div className="cartItems">   
                  
                  {
                    cart && cart.map((data) =>(
                      <CartItem 
                  key = {data.id}
                  itemId = {data.id}
                  name={data.name}
                  imgSrc = {data.imgSrc}
                  qty={"4"}
                  price = {data.price}
                  />
                    ))}
                </div>
              </div>

                <div className="totalSection">
                    <h3>Total</h3>
                    <p>
                      <span>$</span> {total}
                      </p>
                </div>
                  <button className = "checkOut"> Check Out</button>
                  </div>
             )}
             </div>
            </main>
          
  
  

        {/* Bottom Menu*/}
        <div className="bottomMenu">

          <ul id='menu'>
            {/*prettier ignore */}
            <MenuContainer link={'#'} icon = {<HomeRounded />} isHome/>
            {/*prettier ignore */}
            <MenuContainer link={'#'} icon = {<Chat />}/>
            {/*prettier ignore */}
            <MenuContainer link={'#'} icon = {<AccountBalanceWalletRounded />}/>
            {/*prettier ignore */}
            <MenuContainer link={'#'} icon = {<Favorite />}/>
            {/*prettier ignore */}
            <MenuContainer link={'#'} icon = {<SummarizeRounded />}/>
            {/*prettier ignore */}
            <MenuContainer link={'#'} icon = {<Settings />}/>

            <div className="indicator"></div>
          </ul>
        </div>
      
      </div>
  );

}

export default App;
