import React from "react";
import "../assets/styles/Button.scss"

const Button = ({icon = null, text, type = "text", onClick = null}) => {
    return (
        <button className="btn" onClick={onClick} type={type}>
            <span style={{lineHeight: icon && "28px"}}>{text}</span>
            {
                icon && <img src={icon} alt=""/>
            }
        </button>
    )
}

export default Button;