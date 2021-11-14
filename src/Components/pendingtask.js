import React from 'react';
import Addexercise from './Addexercise';
import  './dashboard.css';
import {useState} from 'react'

function Pendingtask() {

    const [items, setItems] = useState([ ])

    const addItems = (list) => {
          setItems([ ...items, {
            id: items.length, 
            value: list,
        }])
        
           }

           const delItems = () => {
            setItems([ ])
          
             }

    return (
        <div>
             <section id="pending-task">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex align-content-center flex-wrap width-auto">
              
              
                <h4>Pending Exercises</h4>
              
        
                
                <ion-icon className="ml-auto p-2" name="trash-outline"></ion-icon>
             
            <button className="btn btn-theme1  my-0 " onClick={delItems}> Clear Tasks</button> 
              
            </div>
          </div>
        </div>
        
        <Addexercise addItems={addItems}/>

        <div className="task-card">

          <div className="container mt-5 mb-3">
            <div className="row">

            <ul>
            {items.map(item => (
               <li key={item.id} style={{listStyle: "none"}}>

                <div className=" col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card p-3 mb-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <div className="icon"> <i className="far fa-futbol"></i> </div>
                                <div className="ms-2 c-details">
                                    <h6 className="mb-0">{item.value}</h6> <span>1 days ago</span>
                                </div>
                            </div>
                            <div className="badge"><a href='/addexercise'> <span>Edit</span> </a></div>
                        </div>
                        <div className="mt-5">
                          <div className="d-flex justify-content-between">
                            <h5 className="heading">Progress</h5>
                            <span></span>
                            <h5>55%</h5>
                          </div>
                            <div className="mt-3">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="mt-3"> <span class="text1">Days Left <span class="text2">5 Days</span></span> </div>
                            </div>
                        </div>
                    </div>
                </div>

                </li>))}
        </ul>

             

            

         

      

      
                
               


            </div>
        </div>

        </div>

      </section>
        </div>
    )
}

export default Pendingtask
