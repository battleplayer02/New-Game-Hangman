import React, { Component } from "react";
import Timer from '../Timer/Timer'
import './Stage1.css'
class Stage1 extends Component {

    render() {
        return <div id="main">

            <div>
<<<<<<< HEAD
                <h3 style={{width:"100%"}}>
                    Stage 1...!!! <br />Chances: 5.
                    <div style={{justifyContent:"center",display:"flex"}}><Timer redirect={'level5'} seconds={5} /></div>
                </h3>
=======
                <div style={{ fontSize: "35px" }}>Welcome to Stage 1...!!! <br />You will get 5 chances.</div>
                <div>
                    <Timer redirect={'level5'} seconds={5} /></div>
>>>>>>> 534824988c1ac925232b9eb13999394f1c7f34bb
            </div>

        </div>
    }
}

export default Stage1;