import React, { Component } from "react";
import Timer from '../Timer/Timer'
import './Stage2.css'
class Stage2 extends Component {

    render() {
        return <div id="main">
            <div>
                <h3>
                 Stage 2 <br />Bandages: 4
                    <div style={{justifyContent:"center",display:"flex"}}><Timer redirect={'level4'} seconds={5} /></div>
                </h3>
            </div>
        </div>
    }
}

export default Stage2;