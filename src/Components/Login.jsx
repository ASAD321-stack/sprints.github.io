import React from 'react'
import Navigation from './navigation';
import Topbar from './topbar';



const Login = () => {


    return (
        <div>

            <main>
                <div className="container">

                  <Navigation/>

                  <div className="main">
              
                   <Topbar/>
                   
                   <section className="form-3" style={{padding: "50px"}}>
                     <div class="container">
                        <div class="row">

                        <div class="col-md-6 col-sm-12 pic-sec">
                        <h4>Log in</h4>
                            <form>

                                <div class="form-group">
                                    <label htmlFor="Password">Email</label>
                                    <input   type="email" class="form-control" id="Email" placeholder="E-mail" autoComplete="off" required/>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input  type="password" class="form-control" id="password" placeholder="Password" autoComplete="off" required/>
                                </div>
                                <button type="submit" class="btn btn-primary" style={{marginTop: "10px"}}>Log in</button> 
                            </form>
                        </div>
                        <div class="col-md-6 col-sm-12 col-2-login ">
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

export default Login
