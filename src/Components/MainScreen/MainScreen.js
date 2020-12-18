import React from 'react'
import "./MainScreen.css"
import balloon from "../../img/Balloon_0.png";

export default function MainScreen() {
    return (
        <div>
            <div className="app-bg top">
                <div className="App">
                    <div className="wel__text">
                        <div className="animated-title">
                            <div className="text-top">
                                <div className="text-center ml-3 mr-3" style={{ fontWeight: "600" }}>
                                    Welcome to hangman !<br />
                      Click to begin !
                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="balloon btn-square">
                        <img src={balloon} className="img-fluid mt-3" height="470px" width="230px" alt="img not found" />
                    </div>
                    <div id="buttonContainer">
                        <div id="sp"><a href="level5">Start</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
