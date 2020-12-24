import React from 'react'
import './Balloon.css'
function Balloon(props) {

    if (props.gamestat === 0) {
        var element = document.getElementById("balloon");
        element.classList.remove("balloon");
        element.classList.add("balloonafter");
    }
    return (
        <div className="balloon mt-2 mb-2" id="balloon">
            <img src={props.img} alt="Not Found" height="310" width="192" />
        </div>
    )
}

export default Balloon
