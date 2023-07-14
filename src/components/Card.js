import React from "react";
import star from "../images/starIcon.png";



export default function Card(props) {


  let badgeText;
  if (props.card.openSpots===0){
    badgeText="SOLD OUT"
  }
  else if(props.card.location==="Online"){
    badgeText="ONLINE"
  }
  
 
  return (
    <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        
      <img src={`../images/${props.card.coverImg}`} alt="" className="cardImg" />
      <div className="card-stats">
        <img src={star} alt="" className="star" />
        <span>{props.card.stats.rating}</span>
        <span className="gray">({props.card.stats.reviewCount}) . </span>
        <span className="gray"> {props.card.location}</span>
      </div>

      <p className="card-title">{props.card.title}</p>
      <p>
        <span className="bold">FRom ${props.card.price}</span> / Person
      </p>
    </div>
  );
}
