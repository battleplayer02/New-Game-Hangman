import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Level4 from './Components/Level4/Level4';
import Level5 from './Components/Level5/Level5';
import MainScreen from './Components/MainScreen';
import Test from './Components/Test'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <Test hint={"guess the ghrase"}/>
        </Route>

        <Route path="/level4">
          <div className="cloud__class">
            <div className="bg top">
              <Level4 />
            </div>
          </div>
        </Route>

        <Route path="/level5">
          <div className="cloud__class">
            <div className="bg top">
              <Level5 />
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