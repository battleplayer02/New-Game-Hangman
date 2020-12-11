import React, { Component } from 'react'
import './Game.css';
import { randWord } from '../Words.js';
import won from "../img/original.gif";
import lost from "../img/tenor.gif";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
// import green from "../img/circle_green.png";
// import red from "../img/circle_red.png";

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
            this.state.gussed.has(letter) ?
                letter :
                letter === " " ?
                    " " :
                    "_"
        ));
    }

    submitButton = () => {
        this.setState(st => ({
            gussed: st.gussed.add(" "),
        }));
    }

    handelGuess = (e) => {
        let letter = e.target.value;

        this.setState(st => ({
            gussed: st.gussed.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
        }));
    }

    generateButtons = () => {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter, i) =>
            <button
                value={letter}
                key={i}
                className="button-alpha"
                onClick={this.handelGuess}
                disabled={this.state.gussed.has(letter)}>
                {letter}
            </button>
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

    componentDidMount() {

    }

    render() {
        window.onbeforeunload = function () {
            return "Are you sure you want to reload.";
        }

        var g = "";
        for (let key in this.gussedWord()) {
            if (this.gussedWord()[key] === " ") {

            } else {
                g += this.gussedWord()[key];
            }
        }
        var originalWord = this.state.answer.split(' ').join('');
        console.log(g, originalWord);
        // for (const k of this.gussed.values()) {
        //     if(k ===" "){

        //     }
        //     else{
        //         g+=k;
        //     }
        // }
        // console.log(g);
        const isWinner = g === originalWord;

        // console.log(this.gussedWord().join("").replace(" ", ""), this.state.answer.replace(" ", ""));
        let gameStat = this.generateButtons();
        const gameOver = this.state.mistake >= this.props.maxWrong;
        if (isWinner) {
            gameStat = 1;
        }
        if (gameOver) {
            gameStat = 0;
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
                        : <></>
                }
                {
                    gameStat === 0 ?
                        <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} height="300" width="300" animation="rotate">
                            <div>
                                <div className="card-header" style={{ fontSize: "20px", color: "red" }}>You Lost...!</div>
                                <div>
                                    <img src={lost} style={{ objectFit: "scale-down" }} height="50%" width="65%" alt="img not found" />
                                </div>
                            </div>
                        </Rodal> : <></>
                }
                <div className="Hangman container">
                    <h2 className="questionBox"><div>Guess The Phrase ? </div></h2>
                    <div className="score" style={{ display: "flex" }}>
                        <div>Bandages Left : {4 - this.state.mistake}</div>
                        {/* <div className="correct">Attempts:{this.props.maxWrong} </div> */}
                    </div>
                    <div className="maingrid ">
                        <div className="center justify-content-center align-items-center">
                            <div className="balloon mt-5 mb-4" id="balloon">
                                <img src={this.props.images[this.state.mistake]} alt="Not Found" height="310" width="192" />
                            </div>
                            <div className="col-sm-8 col-lg-8" style={{ letterSpacing: "3px", background: "rgba(211, 211, 211, 0.2)", borderRadius: "15px", fontSize: "30px", textAlign: "center", fontWeight: "500", margin: "auto" }}>
                                {
                                    !gameOver ?
                                        this.gussedWord() :
                                        this.state.answer
                                }
                            </div>
                        </div>

                        <div className="text-center" style={{ marginTop: "10px" }}>
                            {
                                gameStat === 1 ?
                                    <h1>You Won</h1> :
                                    gameStat === 0 ?
                                        <h1 className="text-center">You Lost</h1> :
                                        <div className="words" >
                                            {gameStat}
                                        </div>
                            }

                            {
                                gameStat === 0 ?
                                    <button
                                        className="submit-button"
                                        onClick={this.resetButton}>
                                        &nbsp;&nbsp;&nbsp;Reset&nbsp;&nbsp;&nbsp;
                                </button> :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Game;