import React, { Component } from "react";
import Timer from '../Timer/Timer'
import './Stage2.css'
class Stage2 extends Component {

    render() {
        return <div id="main">
            <div>
                <h3>
                    Welcome to Stage 2...!!! <br />You will get 4 chances.
                    <div style={{justifyContent:"center",display:"flex"}}><Timer redirect={'level4'} seconds={5} /></div>
                </h3>
            </div>
        </div>
    }
}

export default Stage2;