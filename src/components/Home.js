import React from 'react'

export default function Home() {


  function searchOrderID() {

    var OrderId = document.querySelector('.search-input').value
    window.location.href = '/orders?id=' + OrderId
  }



  return (
    <div className="main-staging-area">

    <div className="stage">


      <h3 className="confirm-text">Please enter your order number to confirm your order...</h3>


      <div className="search-container">

        <input className="search-input" />

        <button className="search-button hunny" onClick={searchOrderID}>Confirm My Order</button>

      </div>

      
      </div>
      </div>
  )
}
