import React from 'react'
import Logo from '../images/logo.png'

export default function Home() {


  function searchOrderID() {

    var OrderId = document.querySelector('.search-input').value
    window.location.href = '/orders?id=' + OrderId
  }



  return (
    <div className="main-staging-area">

    <div className="stage">

    <div className="align-center">
    <img className="logo-img" src={Logo} alt="" />
    </div>


      <h3 className="confirm-text">Please ener your order number to confirm your order...</h3>


      <div className="search-container">

        <input className="search-input" />

        <button className="search-button hunny" onClick={searchOrderID}>Confirm My Order</button>

      </div>

      
      </div>
      </div>
  )
}
