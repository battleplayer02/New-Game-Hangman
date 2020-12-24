import React, { Component } from "react";
import Timer from '../Timer/Timer'
import './Stage3.css'
class Stage3 extends Component {

    render() {
        return <div id="main">
            <div>
                <h3>
                    Stage 3 <br />Bandages: 3
                    <div style={{ justifyContent: "center", display: "flex" }}><Timer redirect={'level3'} seconds={5} /></div>
                </h3>
            </div>
        </div>
    }
}

export default Stage3;