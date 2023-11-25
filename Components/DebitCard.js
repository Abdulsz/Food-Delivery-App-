import React from "react";

function DebitCard(){
    return <div className="cardGroup">
    <img src="https://firebasestorage.googleapis.com/v0/b/fooddelivery-6176f.appspot.com/o/fooddelivery%20pictures%2Fvisa%20logo.png?alt=media&token=50ceb14c-3ee2-486c-bd34-34876eb21f6d" alt="" className="card_logo"/>
    <img src="https://firebasestorage.googleapis.com/v0/b/fooddelivery-6176f.appspot.com/o/fooddelivery%20pictures%2Fcard%20chip.png?alt=media&token=e496ac18-4e88-4baa-b2dc-0b1a4396dd03" alt="" className="card_chip"/>

    <div className="card_number">1234 567 8920 3200</div>
    <div className="card_name">Timalma Zakaria</div>
    <div className="card_from">10/21</div>
    <div className="card_to">10/25</div>
    <div className="card_ring"></div>
 </div>       
}

export default DebitCard; 