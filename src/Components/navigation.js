import React from 'react'
import  './dashboard.css';
import { Link } from 'react-router-dom';

function navigation() {
    return (
        <div>
            <div className="navgation">
      <ul>
        <li>
          <Link to='/'>
            <span className="icon"><ion-icon name="barbell-outline"></ion-icon></span>
            <span className="title">Exercise Tracker</span>
            </Link>
        </li>
        <li class="active">
        <Link to='/'>
            <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
            <span className="title">Dashboard</span>
            </Link>
        </li>
        <li>
          <Link to="/login">
            <span className="icon"><ion-icon name="analytics-outline"></ion-icon></span>
            <span className="title">Sign In</span>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <span className="icon"><ion-icon name="newspaper-outline"></ion-icon></span>
            <span className="title">Sign Up</span>
          </Link>
        </li>
        {/* <!-- <li>
          <a href="">
            <span class="icon"><ion-icon name="chatbubble-ellipses-outline"></ion-icon></span>
            <span class="title">Inbox</span>
          </a>
        </li> --> */}
        <li>
          <Link to="/addexercise">
            <span className="icon"><ion-icon name="person-circle-outline"></ion-icon></span>
            <span className="title">Add Exercise</span>
          </Link>
        </li>
        <li>
          <a href="#top">
            <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
            <span className="title">Settings</span>
          </a>
        </li>

      </ul>
    </div>
    </div>
    )
}

export default navigation
