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
        // Clear the script out
        // document.querySelector('.newScript').innerHTML = ''


      setTimeout(() => {

             // // Create a new script tag
      var newScript = document.querySelector('.newScript')
      newScript.innerHTML = doc.data().TrackingScript
      // // Set the innerHTML of the new script tag to the tracking script
      // newScript.innerHTML = doc.data().TrackingScript
      // // // Append the new script tag to the body
      // document.body.appendChild(newScript)
  


      },0)
 





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
          var stage = document.querySelector('.stage')
          stage.innerHTML = ""
          document.querySelector('.coupon-area-wrap').innerHTML = ""

          var div = document.createElement('div')
          div.className='error-container'
          stage.appendChild(div)


          var Headline = document.createElement('h2')
          Headline.innerHTML = "Woops!"
          Headline.className = "error-headline"
          div.appendChild(Headline)
          
          var Text = document.createElement('p')
          Text.innerHTML = "It looks like we haven't found any orders with that ID. Please check the order number again, and if you still have problems, please don't hesitate to get in touch, thank you!"
          Text.className = 'confirm-text'
          div.appendChild(Text)


          var Btn = document.createElement('a')
          Btn.innerHTML = 'Try a differnt order number'
          Btn.className = "search-button"
          Btn.href = '/'
          stage.appendChild(Btn)










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

          <h2>Your order is confirmed 🎉</h2>

         </div>

        <div className="stage-inner"></div>

    

        {/* <div className="delivery-container">

          <div className="delivery-headline">Deliver to:</div>
          <div className="delivery-information">My Address In Paris, London GL52 9PX</div>

        </div> */}

      
      </div>


    </div>

    <div className="coupon-area-wrap">

    <div className="coupon-area">

      <h3 className="coupon-title">Congrats! You got a 10% discount</h3>
      <p>Just use the code: SUNNY10 on your next order...</p>


      </div>
      </div>


    </>
  )
}
