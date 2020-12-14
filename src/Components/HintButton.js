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
      <div  style={{float:"center"}}>
        {
          this.state.toggle ? <span className="hint-class">{this.props.hint}</span>:null
        }
        <button className="submit-button" onClick={this.handelClick}>Hint</button>
      </div>
    );
  }
}