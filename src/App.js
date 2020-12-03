import './App.css';
import balloon from "./img/Balloon_0.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from './Components/Game';
import Test from './Components/Test';

function App() {
  return (

    //if
    //main page '/'
    // /game game 
    <div className="bg top">
      <Router>
        <Switch>

          <Route path="/home">
            <Game />
          </Route>
          <Route path="/test">
            <Test />
          </Route>

          <Route path="/">
            <div className="App">
              <div className="wel__text">
                <div className="animated-title">
                  <div className="text-top">
                    <div>
                      <span>Welcome  </span>
                      <span>To Hangman</span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="buttonContainer">
                <div id="sp"><a href="home">Start</a></div>
              </div>

              <div className="balloon btn-square wobble-horizontal">
                <img src={balloon} className="img-fluid" height="500px" width="300px" alt="img not found" />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;