import React, { Component } from "react";
import Timer from '../Timer/Timer'
class Stage3 extends Component {

    render() {
        return <div style={{ width: "100%", textAlign: "center" }}>
            <h1>
                Welcome to Stage 3...!!!!! <br />Here you will get 3 chances.
                <Timer redirect={'level3'} seconds={5} />
            </h1>
        </div>
    }
}

export default Stage3;