import { firestore } from "../Firebase"

export default function Admin() {

    function tomClick() { 
        const orderID = document.getElementsByClassName('input')[0].value
        const tracking = document.getElementsByClassName('tracking')[0].value
        const content = document.getElementsByClassName('content')[0].value
        const url = document.getElementsByClassName('input')[3].value
  
        const body = {
          orderID,
          tracking,
          content,
          url
        }
  
        console.log(body)
  
        firestore.collection('users').doc(orderID).set({
          "OrderID": orderID,
          "TrackingScript": tracking,
          "BodyContent": content,
          "OrderURL": url 
        })
  
        setTimeout(() => {
  
          document.getElementById('popup-container').className = 'popup-container'
  
  
        },500)

        // Clear out the div with the link
        document.getElementsByClassName('popup-link')[0].innerHTML = ''

        var tomOrderID = document.getElementById('order-id').value

        // Create a new href with url to the order page
        var newLink = document.createElement('a')
        newLink.target = '_blank'
        newLink.href = 'https://mysunnyorder.com/orders?id=' + tomOrderID
        newLink.innerHTML = 'https://mysunnyorder.com/orders?id=' + tomOrderID
        
        document.getElementsByClassName('popup-link')[0].appendChild(newLink)
          
      }


    function hidePop() {
        document.getElementById('popup-container').className = 'popup-container hidden'
      }
  




  return (

    <>

    <div className="popup-container hidden" id="popup-container">
      <div className="popup-bg" onClick={hidePop}></div>
      <div className="popup-content">

   

        <div className="popup-real">

          <img></img>

          <h2>Link Created!</h2>
        

            <div className="popup-link"></div>
        </div>
 
      </div>
    </div>


    <div className="main-container">
      <h2 className="titles" >Order ID</h2>
      <input id="order-id" className="input"/>

      <h2 className="titles m20">Tracking Script</h2>
      <textarea className="input tracking" id="tom"/>

      <h2 className="titles m20">Body Content</h2>
      <textarea className="input content" id="tom"/>

      <h2 className="titles m20">Order URL</h2>
      <input className="input"/>

      <button className="button" onClick={tomClick}><div>Create Order Page</div><div className="bg">Each time I click I owe Tom 1+ blowjob...</div></button>

    </div>

    </>
  );
  
  
  





}