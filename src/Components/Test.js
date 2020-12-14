import React from 'react';
import 'rodal/lib/rodal.css';
export default class Test extends React.Component {

  constructor() {
    super();
    this.state = {
      toggle: false,
    }
  }

  handelClick = (event) => {
    alert("a")
    this.setState({ toggle: true })
    
  }
  render() {
    return (
      <>
        {
          this.state.toggle ? this.props.hint : null
        }

        <button className="hint-btn" onClick={this.handelClick}>Hint</button>

      </>
    );
  }
}