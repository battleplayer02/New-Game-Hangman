import React, { Component } from 'react'
import './Level4.css';
import Confetti from 'react-confetti'
import { randWord } from './Words.js';
import step0 from './img/0.png';
import step1 from './img/1.png';
import step2 from './img/2.png';
import step3 from './img/3.png';
import step4 from './img/4.png';
import Arrow from "../Arrow/Arrow";
import HintButton from '../HintButton';

import { Link } from 'react-router-dom';
import Balloon from '../Balloon/Balloon';
import TimeDuration from '../../TimerDuration/TimeDuration';

class Level4 extends Component {

    phraseStyle1 = { letterSpacing: "4px", background: "rgba(211, 211, 211, 0.2)", borderRadius: "5px", fontSize: "25px", textAlign: "center", fontWeight: "500" }
    phraseStyle2 = { background: "rgba(211, 211, 211, 0.2)", borderRadius: "15px", fontSize: "25px", textAlign: "center", fontWeight: "500" }

    static defaultProps = {
        maxWrong: 4,
        images: [step0, step1, step2, step3, step4],
    }

    constructor(props) {
        super(props);
        var rp = randWord();
        this.state = {
            mistake: 0,
            gussed: new Set([]),
            answer: rp.phrase.toUpperCase(),
            hint: rp.hint,
            visible: true,
            ques: rp.ques,
            reset: null,
        }
    }


    gussedWord = () => {
        return this.state.answer.split("").map(letter => (
            this.state.gussed.has(letter) ?
                letter :
                letter === " " ?
                    " " :
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
                disabled={this.state.gussed.has(letter)}
            >
                {letter}
            </button>
        );
    }


    resetButton = () => {
        window.location.reload();
    }

    componentDidMount() {

    }
    render() {

        var width = window.innerWidth
        var height = window.innerHeight
        var g = "";
        for (let key in this.gussedWord()) {
            if (this.gussedWord()[key] === " ") {

            } else {
                g += this.gussedWord()[key];
            }
        }
        var originalWord = this.state.answer.split(' ').join('');
        console.log(g, originalWord);

        const isWinner = g === originalWord;

        let gameStat = this.generateButtons();
        const gameOver = this.state.mistake >= this.props.maxWrong;
        if (isWinner) {
            gameStat = 1;
        }
        if (gameOver) {
            document.querySelector(".cloud_class_level_4").style.animationDirection = "reverse";
            document.querySelector(".cloud_class_level_4").style.animationDuration = "600ms";
            
            setTimeout(() => {
                this.setState({
                    reset: <Link to="/">
                        <button
                            className="submit-button">
                            &nbsp;&nbsp;&nbsp;Reset&nbsp;&nbsp;&nbsp;
                    </button>
                    </Link>
                })
            }, 5000);
            gameStat = 0;
        }
        return (
            <div className="cloud_class_level_4">
                <div className="bg_level_4">
                    {
                        gameStat === 1 ?
                            < Confetti
                                width={width}
                                height={height}
                            /> : null
                    }
                    <div className="Hangman container">
                        <h2 className="questionBox"><div style={{ textSize: "15px" }}>{this.state.ques}</div></h2>
                        <div className="score">
                            <div style={{ fontSize: "20px", textAlign:"left",width:"50%"}}>Bandages : {5 - this.state.mistake}</div><TimeDuration time={300000} />
                        </div>
                        <div className="maingrid">

                            {/* part1 baloon */}
                            <Balloon gamestat={gameStat} img={this.props.images[this.state.mistake]} />
                            {/* part 2 phrase */}
                            <div>
                                {
                                    !gameOver ?
                                        <span style={this.phraseStyle1}>{this.gussedWord()}</span> :
                                        null
                                    // <p >{this.state.answer}</p>
                                }
                            </div>

                            {/* part 3 keypad */}

                            <div style={{ marginTop: "20px" }}>
                                {
                                    gameStat === 1 ?
                                        <Arrow stage={"Stage3"} redirect={"stage3"} />
                                        :
                                        gameStat === 0 ?
                                            <h1>You Lost</h1> :
                                            <div className="words" >
                                                {gameStat}
                                            </div>
                                }

                                {
                                    gameStat === 1 ?
                                        null :
                                        gameStat === 0 ?
                                            null :
                                            <HintButton hint={this.state.hint} />
                                }

                                {
                                    gameStat === 0 ?
                                    <> {this.state.reset} </>:
                                        null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Level4;