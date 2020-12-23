import React, { useState } from "react"
import "./Arrow.css"
import { Redirect } from "react-router-dom"
function Arrow(props) {
    const [redirect, setRedirect] = useState(null)
    function handleClick() {
        setRedirect(<Redirect to={props.redirect}></Redirect>)
    }
    return <>
        <div>
            {redirect}

            <div class="flip">
                <button onClick={() => handleClick()} style={{background: "transparent",border:"none"}}>
                    <div class="front" >{props.stage}</div>
                    <div class="back">START</div>
                </button>
            </div>
        </div>

    </>
}
export default Arrow;