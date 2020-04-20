import React from "react";
import "./Header.css";

const Header = props => (
    <div className="container">
        <div className="title">{props.children}</div>
        <div className="message"><h2>Click an image to get a point, but don't click an image more than once!</h2></div>
        <div className="score"><h3>Score: {props.score}</h3></div>
        <div className="topScore"><h3>Top Score: {props.topScore}</h3></div>
    </div>
);

export default Header;