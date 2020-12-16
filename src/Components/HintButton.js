import React from 'react';
import 'rodal/lib/rodal.css';
export default class HintButton extends React.Component {

  constructor(){
    super();
    this.state = {
      toggle: false
    }
  }

  handelClick = (event)=>{
    event.target.style.display = "none";
    this.setState({toggle:true});
  }
  render() {
    return (
      <div  style={{float:"left"}}>
        {
          this.state.toggle ? <span className="hint-class">ajfosvofiudgf uiapd gaudyfpg89aydf8 g-98a r988gya er9g a098fgap9rgt0</span>:null
        }
        <button className="submit-button1" onClick={this.handelClick}>?</button>
      </div>
    );
  }
}