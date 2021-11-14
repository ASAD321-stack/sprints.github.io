import React from 'react';
import  './dashboard.css';

function information() {
    return (
        <div>
            <section id="information-section" class="my-5">
        <div className="container">
          <div className="row">
            <div className=" col-lg-4 col-md-12 col-sm-12 mb-2">
              <div className="card p-3 mb-2">
                  <div className="">
                    <div className="icon mb-3 mx-auto"> <i class="fas fa-tasks"></i> </div>
                      <div className="d-flex justify-content-between align-content-center">
                        <div><h5 className="mt-3"><b> Pending <br/> Tasks</b></h5> </div>
                        <div className="badge mt-3"> <span>23</span> </div>
                      </div>
                  </div>
                  
              </div>
          </div>

          <div className=" col-lg-4 col-md-12 col-sm-12 mb-2">
            <div className="card p-3 mb-2">
                <div className="">
                  <div className="icon mb-3 mx-auto"> <i class="fas fa-check-circle"></i> </div>
                    <div className="d-flex justify-content-between align-content-center">
                      <div><h5 className="mt-3"><b> Completed <br/> Tasks</b></h5> </div>
                      <div className="badge mt-3"> <span>56</span> </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div className=" col-lg-4 col-md-12 col-sm-12 mb-2">
          <div className="card p-3 mb-2 ">
              <div className="">
                <div className="icon mb-3 mx-auto"> <i class="fas fa-trophy"></i> </div>
                  <div className="d-flex justify-content-between align-content-center">
                    <div><h5 className="mt-3"><b> Total <br/> Tasks</b></h5> </div>
                    <div className="badge mt-3"> <span>157</span> </div>
                  </div>
              </div>
              
          </div>
      </div>

         </div>
        </div>
      </section>
        </div>
    )
}

export default information
