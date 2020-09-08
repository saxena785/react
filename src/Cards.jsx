import React from 'react';

function Card(props){
    return (
      <>
       <div className ="cards">
        <div className = "card">
       <img src = {props.imgsrc} alt ="Mypic" className="img_Card"/>
        <div className = "card_info">
        <span className = "card_category">{props.title}</span> 
        <h3 className = "card_Title">{props.sName}</h3>
        <a href = {props.link} target="_blank">
        <button>WatchNow</button>
        </a>
        </div>
        </div>
        </div> 
        </>
     );
    }

    export default Card;