import React from 'react'
import "./MainScreen.css"
import balloon from "../../img/Balloon_0.png";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function MainScreen() {
    return (
        <div>
            <div className="app-bg top">
                <div className="App">
                    <div className="wel__text">
                        <div className="text-cente" style={{ fontWeight: "600" }}>
                            <br />Welcome to Hangman<br />Click to begin !<br />
                        </div>
                    </div>
                    <div className="balloon btn-square">
                        <img src={balloon} className="img-fluid mt-3" height="470px" width="230px" alt="img not found" />
                    </div>
                    <div id="buttonContainer">
                        <Button id="sp"><Link to={"stage1"} style={{ textDecoration: "none" }}>🕹️ Start 🕹️</Link></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
