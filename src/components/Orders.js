import React from 'react'
import { firestore } from "../Firebase"
import Logo from "../images/logo.png"
export default function Orders() {


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('id')
    console.log(product);


    // GETTING THE DATA FROM FIREBASE
    firestore.collection('users').doc(product).get().then((doc) => {
      if (doc.exists) {
        firestore.collection('users').doc(product)        
        document.querySelector('.stage-inner').innerHTML = doc.data().BodyContent;



        // Clear the div out
        document.querySelector('.stage-inner').innerHTML = ''



      // Get the tracking script
      var trackingScript = doc.data().TrackingScript
      // Create a new script tag
      var newScript = document.createElement('script')
      // Set the innerHTML of the new script tag to the tracking script
      newScript.innerHTML = trackingScript
      // Append the new script tag to the body
      document.body.appendChild(newScript)






      // Get the body content
      var bodyContent = doc.data().BodyContent
      // Create a new div
      var newDiv = document.createElement('div')
      // Set the innerHTML of the new div to the body content
      newDiv.innerHTML = bodyContent
      // Append the new div to the body
      document.querySelector('.stage-inner').appendChild(newDiv)



      // Create a div for the order button
      var newDiv2 = document.createElement('div')
      newDiv2.className = "order-status-button"
      newDiv2.innerHTML = "Check Out My Order"





      // Get the order url
      var orderURL = doc.data().OrderURL
      // Create a new href with url to the order page
      var newLink = document.createElement('a')
      newLink.href = orderURL

      // Append the new link to the body
      newLink.appendChild(newDiv2)
      document.querySelector('.stage-inner').appendChild(newLink)




      } else {
          // document.querySelector('.stage').innerHTML = "Add Some Notes, Bitch!"
      }
    }) 
    .finally(() => {
     

    })


    
  return (
    <>

    <div className="main-staging-area">

      <div className="stage">

        <div className="stage-inner-container">
          
       

          <img className="logo-img" src={Logo} alt="" />

          <h2>Wheey! Your order is confirmed!</h2>

         </div>

        <div className="stage-inner"></div>

    

        {/* <div className="delivery-container">

          <div className="delivery-headline">Deliver to:</div>
          <div className="delivery-information">My Address In Paris, London GL52 9PX</div>

        </div> */}

      
      </div>


    </div>


    <div className="coupon-area">

      <h3 className="coupon-title">Congrats! You got a 10% discount</h3>
      <p>Just use the code: SUNNY10 on your next order...</p>


    </div>


    </>
  )
}
