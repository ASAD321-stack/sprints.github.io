import React from 'react'
import Navigation from './navigation';
import Topbar from './topbar';

import "./signup.css"


const Signup = () => {
    return (
        <div>

<main>
                <div className="container">

                  <Navigation/>

                  <div className="main">
              
                   <Topbar/>
                   

                   <section className="form-3" style={{padding: "50px"}}>
                <div className="container">
                    <div className="row">

                        <div className="col-md-7 pic-sec">
    
                        <h4>Sign up</h4>
                            <form>
                                <div className="form-group">
                                    <label for="Name">Name</label>
                                    <input type="text" className="form-control" id="Name" placeholder="Name" required />
                                </div>
                                <div className="form-group">
                                    <label for="Email">Email</label>
                                    <input type="email" className="form-control" id="Email" placeholder="E-mail" required />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" required />
                                </div>
                                <div className="form-group">
                                    <label for="confirm-password">confirm Password</label>
                                    <input type="password" className="form-control" id="confirm-password" placeholder="confirm password" required />
                                </div>
                              <button  type="submit" className="btn btn-primary" style={{marginTop: "10px"}}>Sign up </button> 
                            </form>
                        </div>
                        <div className="col-md-5 col-sm-12 col-xs-12 col-2-sign">
                            <img src="./schrimer-removebg-preview.png" style={{ width: "220px" }} alt="" />

                            

                        </div>
                    </div>
                </div>
            </section>

                   

                   </div>

                </div>    
            </main>

                   
                   
                   

                   

               

           
        </div>
    )
}

export default Signup;