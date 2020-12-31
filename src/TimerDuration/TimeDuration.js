import React, {useState} from "react";
import Timer from "react-compound-timer";
import {Redirect} from "react-router-dom";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function TimeDuration(props) {
    const [red, setred] = useState(null)
    const [flag, setFlag] = useState(0)
    const options = {
        title: 'Title',
        message: 'Message',
        buttons: [
            {
                label: 'Yes',
                onClick: () => <Redirect to="/"/>
            },
            {
                label: 'No',
                onClick: () => alert('Click No')
            }
        ],
        childrenElement: () => <div/>,
        customUI: ({onClose}) => {
            return (
                <div class="react-confirm-alert-body">
                    Time Up <br/>You Lost
                    <div class="react-confirm-alert-button-group">
                        <button onClick={() => onClose()}>Yes</button>
                        <button onClick={() => onClose()}>No</button>
                    </div>
                </div>
            );
        },
        closeOnEscape: false,
        closeOnClickOutside: false,
        willUnmount: () => {
            setFlag(1)
        },
        afterClose: () => {
            setred(<Redirect to={"/"}/>)
        },
        onClickOutside: () => {
        },
        onKeypressEscape: () => {
        }
    };

    return (
        <>
            {
                props.colortxt ?
                    <div style={{fontSize: "20px", textAlign: "right", width: "50%",color:"white"}}>Time:
                        <Timer initialTime={props.time} direction="backward">
                            {({getTimerState}) => (
                                <>
                                    {
                                        getTimerState() === "STOPPED" ?
                                            <>Time UP{flag === 0 ? confirmAlert(options) : null}</> :
                                            <>
                                                <Timer.Minutes/>:<Timer.Seconds/>
                                            </>
                                    }
                                </>
                            )}
                        </Timer>{red}
                    </div>
                    :
                    <div style={{fontSize: "20px", textAlign: "right", width: "50%"}}>Time:
                        <Timer initialTime={props.time} direction="backward">
                            {({getTimerState}) => (
                                <>
                                    {
                                        getTimerState() === "STOPPED" ?
                                            <>Time UP{flag === 0 ? confirmAlert(options) : null}</> :
                                            <>
                                                <Timer.Minutes/>:<Timer.Seconds/>
                                            </>
                                    }
                                </>
                            )}
                        </Timer>{red}
                    </div>
            }
        </>
    );
}

export default TimeDuration;
