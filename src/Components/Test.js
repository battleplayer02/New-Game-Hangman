import React from 'react';
import Rodal from 'rodal';
import balloon from "../img/tenor.gif";

// include styles
import 'rodal/lib/rodal.css';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.show.bind(this)}>show</button>

        <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} animation="rotate">
          <div>
              Content
              <img src={balloon} style={{objectFit:"scale-down"}} height="100px" width="150px" alt="img not found" />
          </div>
        </Rodal>
      </div>
    );
  }
}