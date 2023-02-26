import React from "react";
import "../assets/styles/Button.scss"

const Button = ({icon = null, text}) => {
    return (
        <button className="btn">
            <span style={{lineHeight: icon && "28px"}}>{text}</span>
            {
                icon && <img src={icon} alt=""/>
            }
        </button>
    )
}

export default Button;