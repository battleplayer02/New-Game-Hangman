import React from 'react'
import "./MainScreen.css"
import balloon from "../../img/Balloon_0.png";

export default function MainScreen() {
    return (
        <div>
            <div className="app-bg top">
                <div className="App">
                    <div className="wel__text">
                        <div className="text-cente" style={{ fontWeight: "600" }}>
                            <br />Welcome to hangman !<br />Click to begin !<br />
                        </div>
                    </div>
                    <div className="balloon btn-square">
                        <img src={balloon} className="img-fluid mt-3" height="470px" width="230px" alt="img not found" />
                    </div>
                    <div id="buttonContainer">
                        <div id="sp"><a href="stage1">Start</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
