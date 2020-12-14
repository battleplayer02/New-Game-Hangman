import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from './Components/Game';
import MainScreen from './Components/MainScreen';
import Test from './Components/Test'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <Test hint={"guess the ghrase"}/>
        </Route>

        <Route path="/home">
          <div className="cloud__class">
            <div className="bg top">
              <Game />
            </div>
          </div>
        </Route>

        <Route path="/">
          <div className="cloud__class__1">
            <MainScreen />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;