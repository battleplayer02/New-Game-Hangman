import React, { Component } from "react";
import Timer from '../Timer/Timer'
import './Stage1.css'
class Stage1 extends Component {

    render() {
        return <div id="main">

            <div>
                <div style={{ fontSize: "35px" }}>Stage 1 <br />Bandages: 5</div>
                <div>
                    <Timer redirect={'level5'} seconds={5} /></div>
            </div>

        </div>
    }
}

export default Stage1;