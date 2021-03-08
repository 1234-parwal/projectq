import React, { Component } from 'react';

// class SlotsAvailable extends Component {
//     render ()
//     {
//         return  <button type="button">3 PM</button> 
//     }

// }

const SlotsAvailable = props => {
    console.log(props)
    return (
    <div style={{float: 'left'}} id="container">
        <div><button type="button" class="msgBtn">{props.time} <br></br> {props.noofslots}</button></div>
    
    </div>
    )
}

export default SlotsAvailable ;