import React from 'react';
import  './dashboard.css';
import Navigation from './navigation';
import Topbar from './topbar';
import Information from './information';
import Pendingtask from './pendingtask';
import Completedtask from './completedtask';


function dashboard() {
    return (
        <div>
            <main>
                <div className="container">

                  <Navigation/>

                  <div className="main">
              
                   <Topbar/>
                   

                    <Information/>

                    <Pendingtask />

                   <Completedtask/>

                   

                   </div>

                </div>    
            </main>
  
        </div>
    )
}

export default dashboard
