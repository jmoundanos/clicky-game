import React from "react";
import "./Header.css";


const Header = props => (
    <div className="container">
        <div className="title"><img alt="Stranger Things Logo" src={'/assets/images/logo.png'}></img></div>
        <div className="message"><h4>Click an image to get a point, but don't click an image more than once!</h4></div>
        <div className="score"><h5>Score: {props.score}</h5></div>
        <div className="topScore"><h5>Top Score: {props.topScore}</h5></div>
    </div>
);

export default Header;