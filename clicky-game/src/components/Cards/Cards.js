import React from "react";
import "./Cards.css";

//Render image to the screen
const Cards = props => (
  <div className="card img-container">
       <img height="220" width="190" alt={props.name} src={props.image} id={props.id} 
         onClick={() => props.clickedCard(props.id)}/> 
  </div>
);

export default Cards;