import React, { Component } from 'react'
import './Game.css';
import { randWord } from '../Words.js';
import won from "../img/original.gif";
import lost from "../img/tenor.gif";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import green from "../img/circle_green.png";
import red from "../img/circle_red.png";

import step0 from '../img/0.png';
import step1 from '../img/1.png';
import step2 from '../img/2.png';
import step3 from '../img/3.png';
import step4 from '../img/4.png';

class Game extends Component {

    static defaultProps = {
        maxWrong: 4,
        images: [step0, step1, step2, step3, step4],
        oldAnimation: {}
    }

    constructor(props) {
        super(props);
        this.state = {
            mistake: 0,
            gussed: new Set([]),
            answer: randWord(),
            visible: true,
        }
    }


    gussedWord = () => {
        return this.state.answer.split("").map(letter => (
            this.state.gussed.has(letter) ? letter : " _ "
        ));
    }

    handelGuess = (e) => {
        let letter = e.target.value;
        
        this.setState(st => ({
            gussed: st.gussed.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
        }));
    }

    generateButtons = () => {
        return "abcdefghijklmnopqrstuvwxyz ".toUpperCase().split("").map((letter, i) =>
            <button
                value={letter}
                key={i}
                className="button-alpha"
                onClick={this.handelGuess}
                disabled={this.state.gussed.has(letter)}
            >{letter}</button>
        );
    }


    resetButton = () => {
        window.location.reload();
    }
    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    render() {
        window.onbeforeunload = function(){
            return "Aru you sure you want to reload."
        }
        const isWinner = this.gussedWord().join("") === this.state.answer;
        let gameStat = this.generateButtons();
        const gameOver = this.state.mistake >= this.props.maxWrong;

        if (isWinner) {
            gameStat = 1;
        }

        if (gameOver) {
            gameStat = 0;

            document.querySelector("body").style.animation = false;
        }
        return (
            <>
                {
                    gameStat === 1 ?
                    <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} height="300" width="300" animation="rotate">
                        <div>
                            <div className="card-header" style={{ fontSize: "20px" }}>You Won....!</div>
                            <div>
                                <img src={won} style={{ objectFit: "scale-down" }} height="80%" width="90%" alt="img not found" />
                            </div>
                        </div>
                    </Rodal>
                    :<></>
                }
                {   
                    gameStat===0?
                    <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} height="300" width="300" animation="rotate">
                        <div>
                            <div className="card-header" style={{ fontSize: "20px" ,color:"red"}}>You Lost...!</div>
                            <div>
                                <img src={lost} style={{ objectFit: "scale-down" }} height="50%" width="65%" alt="img not found" />
                            </div>
                        </div>
                    </Rodal>:<></>
                }
                <div className="Hangman container">
                    <h2 className="questionBox"><div>Guess The Phrase ? </div></h2>
                    <div className="score" style={{display:"flex"}}>
                        <div style={{borderRadius:"25px",width:"100px", marginRight:"auto",backgroundImage:{green}}}> Wrong:{this.state.mistake}</div>
                        <div style={{borderRadius:"25px",width:"100px", marginLeft:"auto",backgroundImage:{red}}}>Total:{this.props.maxWrong} </div>
                    </div>
                    <div className="maingrid ">
                        <div className="center justify-content-center align-items-center">
                            <div className="balloon" id="balloon">
                                <img src={this.props.images[this.state.mistake]} alt="Not Found" height="320" width="190" />
                            </div>
                            <div className="col-sm-8 col-lg-4" style={{background:"lightgrey",borderRadius:"15px", fontSize: "30px", textAlign: "center", fontWeight: "500",margin:"auto" }}>
                                {!gameOver ? this.gussedWord() : this.state.answer}
                            </div>
                        </div>
                        
                        <div className="text-center" style={{ marginTop: "10px" }}>
                            {gameStat === 1 ? <h1>You Won</h1> : gameStat === 0 ? <h1 className="text-center">You Lost</h1> : <div className="words" > {gameStat}</div>}
                            {gameStat === 0 ?
                                <button
                                    className="btn btn-danger p-3 mt-4"
                                    onClick={this.resetButton}>
                                    &nbsp;&nbsp;&nbsp;Reset&nbsp;&nbsp;&nbsp;
                                </button> : <></>
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Game;