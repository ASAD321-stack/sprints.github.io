import React from 'react'
import  './dashboard.css';

function topbar() {
    return (
        <div>
            <div className="topbar">
        <div className="container">
          <div className="row">
        <div className=" user  d-flex ml-auto">
          <h6 className="mr-3 my-auto">Asad Naseem</h6>
          <h6 className="mr-3 my-auto">Account Settings</h6>
          <ion-icon name="person-circle-outline"></ion-icon>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default topbar
