import React, { Component } from "react";
import Timer from '../Timer/Timer'
import "./Stage2.css";
class Stage2 extends Component {

    render() {
        return <div style={{ width: "100%", textAlign: "center" }}>
            <h1>
                Welcome to Stage 2...!!!!! <br />Here you will get 4 chances.
                <Timer redirect={'level4'} seconds={5} />
            </h1>
        </div>
    }
}

export default Stage2;