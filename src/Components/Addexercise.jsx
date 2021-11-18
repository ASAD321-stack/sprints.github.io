import React, { useState } from 'react';
import axios from "axios"

import "./Addexercise.css"

const Addexercise = ({addItems}) => {

    const [username, setuserName] = useState('')
    const [date, setDate] = useState('')
    const [duration, setDuration] = useState('')
    const [description, setDescription] = useState('nice play')
   

  
    const handleSubmit = (e) =>{
        e.preventDefault();
      const user= addItems({username,date,duration,description});
       
       axios.post('https://localhost:5000/exercises/add',user
       )
           .then(res=> console.log(res.data ))

    }


   

// const PostData= async(e)=>{
//     e.preventDefault();
//     const username=name;
//     const duration=duration;
//     const date=date;
//     const description=description;

//   await fetch('/exercises/add',{
//     methode: "POST",
//     headers:{
//         "Content-Type" : "application/json"
//     },
//     body: JSON.stringify({

//         username,duration,date,description
         
//     })
//   });
//   const data=await res.json();

//   if (res.status === (400)||  !data){
//       window.alert("invalid registration")
//       console.log("invalid registration")
//   }
   
  
    

// }




    return (
        <>


            
                   

            <section id="form-1" style={{padding: "50px"}}>
                <div className="container-1">
                    <div className="row ">
                        <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12  col-1">
                            <h1>Add Exercise Section</h1>

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                        <input type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={username}
                                            onChange={e => {setuserName(e.target.value)}}
                                            placeholder="Name" required maxlength="10" />   
                                </div>

                                <div className="form-group">
                                    <label for="exercises">Choose you exercise below</label>
                                        <select className="form-control" id="exercises" required>
                                            <option value="cycling">cycling</option>
                                            <option value="cricket">cricket</option>
                                            <option value="swimming">swimming</option>
                                            <option value="skipping">skipping</option>
                                            <option value="running">running</option>
                                            <option value="walking">walking</option>
                                        </select>
                                </div>


                                <div className="form-group">
                                    <label for="duration">Duration  </label>
                                        <input type="number" className="form-control" id="duration"  value={duration}
                                            onChange={e => {setDuration(e.target.value)}} placeholder="Duration*(mins)" /> 
                                </div>

                                <div className="form-group">
                                    <label for="exercise-date">Date and time </label>
                                        <input type="datetime-local"  value={date}
                                            onChange={e => {setDate(e.target.value)}}className="form-control" id="exercise-date" />                                
                                </div>

                                <div className="form-group"> 
                                    <label for="exampleFormControlTextarea1">Desciption   </label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1"  value={description}
                                            onChange={e => {setDescription(e.target.value)}}rows="2" maxlength="100"></textarea>                
                                </div>

                                <button type="submit" className="btn"> Add </button>
                                
                            </form>

                        </div>

                        <div className=" col-lg-6 col-md-6 col-sm-12  sol-xs-12 col-2">

                            <h1> How many Calories you burned</h1>
                            <form>

                            <label for="">Your weight </label>

                                <div className="form-row form-group">
                                        <div className="col-md-3 col-sm-3">
                                            <input type="number" className="form-control" placeholder="200" />
                                        </div>
                                        <div className="col-md-9 col-sm-9 ">
                                            <select className="form-control" id="">
                                                <option>pounds</option>
                                                <option>kg</option>

                                            </select>
                                        </div>
                                   
                                </div>
                                <label for="time">How long</label>
                                <div className="form-row form-group">
                                        <div className="col-md-3 col-sm-12 ">
                                            <input id="time" type="number" className="form-control" />
                                        </div>
                                        <div className="col-md-8 col-sm-12">
                                            <p>Min</p>
                                        </div>
                                    
                                </div>
                                <button type="submit" 
                                className="btn btn-block" >Calculate</button>

                            </form>
                        </div>

                    </div>
                </div>


            </section>

                   

             
                   
                
                   

                   

            

        </>
    )
}

export default Addexercise
