import React, { Component } from "react";
import Timer from '../Timer/Timer'
class Stage1 extends Component {

    render() {
        return <div style={{ width: "100%", textAlign: "center" }}>
            <h1>
                Welcome to Stage 1...!!!!! <br />Here you will get 5 chances.
                <Timer redirect={'level5'} seconds={5} />
            </h1>
        </div>
    }
}

export default Stage1;