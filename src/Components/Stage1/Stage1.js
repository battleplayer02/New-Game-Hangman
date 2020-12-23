import React, { Component } from "react";
import Timer from '../Timer/Timer'
import './Stage1.css'
class Stage1 extends Component {

    render() {
        return <div id="main">
            <div>
                <h3 style={{width:"100%"}}>
                    Stage 1...!!! <br />Chances: 5.
                    <div style={{justifyContent:"center",display:"flex"}}><Timer redirect={'level5'} seconds={5} /></div>
                </h3>
            </div>
        </div>
    }
}

export default Stage1;