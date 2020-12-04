import './App.css';
import balloon from "./img/Balloon_0.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from './Components/Game';
import Test from './Components/Test';

function App() {
  return (
    
      <Router>
        <Switch>

          <Route path="/home">
          <div className="bg top">
            <Game />
          </div>
          </Route>
          <Route path="/test">
            <Test />
          </Route>

          <Route path="/">
          <div className="top">
            <div className="App">
              <div className="wel__text">
                <div className="animated-title">
                  <div className="text-top">
                    <div className="text-center ml-3 mr-3" style={{ fontWeight: "600" }}>
                      Welcome to hangman !<br />
                      Click to begin !
                    </div>
                  </div>
                </div>
              </div>
              <div className="balloon btn-square">
                <img src={balloon} className="img-fluid" height="490px" width="240px" alt="img not found" />
              </div>
              <div id="buttonContainer">
                <div id="sp"><a href="home">Start</a></div>
              </div>
            </div>
            </div>
          </Route>
        </Switch>
      </Router>

  );
}

export default App;