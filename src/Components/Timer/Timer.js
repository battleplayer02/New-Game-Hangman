import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props)
        this.tick = this.tick.bind(this)
        this.state = { seconds: props.seconds }
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }

    tick() {
        if (this.state.seconds > 0) {
            this.setState({ seconds: this.state.seconds - 1 })
        } else {
            window.location.replace(this.props.redirect);
        }
    }
    render() {
        return <div style={{ width: "100%", textAlign: "center" }}>
            {this.state.seconds}
        </div>
    }
}

export default Timer;