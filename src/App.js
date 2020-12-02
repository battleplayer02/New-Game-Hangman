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
    <>
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
                <div class="animated-title">
                  <div class="text-top">
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
                <img src={balloon} height="350" width="250" alt="img not found" />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;