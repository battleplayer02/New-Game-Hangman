import React, { Component } from 'react'
import './Level4.css';
import { randWord } from './Words.js';
import step0 from './img/0.png';
import step1 from './img/1.png';
import step2 from './img/2.png';
import step3 from './img/3.png';
import step4 from './img/4.png';
import HintButton from '../HintButton';
import Confetti from 'react-confetti'
import Timer from '../Timer/Timer'
import { Link } from 'react-router-dom';

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
            gameStat = 0;
        }

        var width = window.innerWidth
        var height = window.innerHeight
        return (
            <>
                {
                    gameStat === 1 ?
                        < Confetti
                            width={width}
                            height={height}
                        /> : null
                }
                <div className="Hangman container">
                    <h2 className="questionBox"><div>Guess The Phrase ? </div></h2>
                    <div className="score">
                        <div style={{ fontSize: "20px" }}>Bandages : {4 - this.state.mistake}</div>
                    </div>
                    <div className="maingrid">

                        {/* part1 baloon */}
                        <div className="balloon mt-2 mb-2" id="balloon">
                            <img src={this.props.images[this.state.mistake]} alt="Not Found" height="310" width="192" />
                        </div>
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
                                    <h1>You Passed Stage 2....!!!! <br /><Timer seconds={5} redirect={"stage3"} /> </h1>
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
                                    <Link to="/"><button
                                        className="submit-button">
                                        &nbsp;&nbsp;&nbsp;Reset&nbsp;&nbsp;&nbsp;
                                    </button>
                                    </Link> :
                                    null
                            }
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Level4;
//zinda hai ky