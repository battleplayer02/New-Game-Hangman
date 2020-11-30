import React, { Component } from 'react'
import './Game.css';
import { randWord } from '../Words.js';

import step0 from '../img/0.png';
import step1 from '../img/1.png';
import step2 from '../img/2.png';
import step3 from '../img/3.png';
import step4 from '../img/4.png';

class Game extends Component {

    static defaultProps = {
        maxWrong: 4,
        images: [step0, step1, step2, step3, step4]
    }

    constructor(props) {
        super(props);
        this.state = {
            mistake: 0,
            gussed: new Set([]),
            answer: randWord(),
        }
    }


    gussedWord = () => {
        return this.state.answer.split("").map(letter => (
            this.state.gussed.has(letter) ? letter : " _ "
        ));
    }

    handelGuess = (e) => {
        let letter = e.target.value;
        if(letter == '?'){
            letter = " ";
        }
        this.setState(st => ({
            gussed: st.gussed.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
        }));
    }

    generateButtons = () => {
        return "abcdefghijklmnopqrstuvwxyz?".toUpperCase().split("").map((letter, i) =>
            <button
                value={letter}
                key={i}
                className="btn btn-lg btn-primary m-1"
                onClick={this.handelGuess}
                disabled={this.state.gussed.has(letter)}
            >{letter}</button>
        );
    }


    resetButton = () => {
        this.setState(
            {
                mistake: 0,
                gussed: new Set([]),
                answer: randWord(),
            }
        );
    }

    render() {
        const isWinner = this.gussedWord().join("") === this.state.answer;
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
                <div className="Hangman container">
                    <h1 className="text-center" style={{ textDecoration: "underline" }}>Guess The Word</h1>
                    <div className=""> <div className="score">Wrong Guesses:&nbsp;{this.state.mistake} of {this.props.maxWrong}</div></div>
                    <div className="maingrid">
                        <div className="center">
                            <div>
                                <img src={this.props.images[this.state.mistake]} alt="Not Found" height="350" width="220" />
                            </div>
                            <div style={{ fontSize: "30px", textAlign: "center", fontWeight: "500" }}>
                                {!gameOver ? this.gussedWord() : this.state.answer}
                            </div>
                        </div>

                        <div className="text-center">
                            <p style={{ fontWeight: "800", fontSize: "large" }}>Guess the programming language.</p>

                            
                                {gameStat == 1 ? <h1>You Won</h1> : gameStat == 0 ? <h1 className="text-center">You Lost</h1> :<div className="words" > {gameStat}</div>}
                            
                            <button
                                className="btn btn-danger p-3"
                                onClick={this.resetButton}>
                                &nbsp;&nbsp;&nbsp;Reset&nbsp;&nbsp;&nbsp;
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Game;