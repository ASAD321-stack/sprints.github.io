import React from 'react';
import  './dashboard.css';

function completedtask() {
    return (
        <div>
            <section id="complete-task">
        <div class="container">
          <div class="row">
            <div class="col d-flex align-content-center flex-wrap">
              <h4>Completed Exercises</h4>
              <div class="ml-auto">
                <button class="btn btn-theme1">View All</button>
              </div>
            </div>
          </div>
        </div>

        <div class="complete-task-table mt-4">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Task</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col ml-auto">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><input type="checkbox"/></th>
                <td>Bicycling</td>
                <td>13 aug 2018</td>
                <td>30 Minutes</td>
                <td><button class="btn btn-theme1">View Details</button></td>
              </tr>
              <tr>
                <th scope="row"><input type="checkbox"/></th>
                <td>Abs</td>
                <td>13 aug 2018</td>
                <td>30 Minutes</td>
                <td><button class="btn btn-theme1">View Details</button></td>
                  
              </tr>
              <tr>
                <th scope="row"><input type="checkbox"/></th>
                <td>Gym, Legs</td>
                <td>13 aug 2018</td>
                <td>30 Minutes</td>
                <td><button class="btn btn-theme1">View Details</button></td>
                  
              </tr>
              <tr>
                <th scope="row"><input type="checkbox"/></th>
                <td>Gym, Legs</td>
                <td>13 aug 2018</td>
                <td>30 Minutes</td>
                <td><button class="btn btn-theme1">View Details</button></td>
                  
              </tr>
              <tr>
                <th scope="row"><input type="checkbox"/></th>
                <td>Climbing</td>
                <td>13 aug 2018</td>
                <td>30 Minutes</td>
                <td><button class="btn btn-theme1">View Details</button></td>
                  
              </tr>
            </tbody>
          </table>
        </div>

      </section>
        </div>
    )
}

export default completedtask
