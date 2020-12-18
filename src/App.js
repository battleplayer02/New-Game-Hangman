import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Level4 from './Components/Level4/Level4';
import Level5 from './Components/Level5/Level5';
import Level3 from './Components/Level3/Level3';
import MainScreen from './Components/MainScreen/MainScreen';
import Test from './Components/Test'
import Stage1 from './Components/Stage1/Stage1';
function App() {
  return (
    <Router>
      <Switch>

        {/* for testing the components */}
        <Route path="/test">
          <Test hint={"guess the ghrase"}/>
        </Route>

        {/* stage1 */}
        <Route path="/level5">
          <div className="cloud__class">
            <div className="bg top">
              <Level5 />
            </div>
          </div>
        </Route>
        {/* stage1 homepage */}
        <Route path="/stage1">
          <div className="cloud__class">
            <div className="bg top">
              <Stage1 />
            </div>
          </div>
        </Route>

        {/* stage2 */}
        <Route path="/level4">
          <div className="cloud__class">
            <div className="bg top">
              <Level4 />
            </div>
          </div>
        </Route>
        {/* stage1 homepage */}
        <Route path="/stage2">
          <div className="cloud__class">
            <div className="bg top">
              <Stage1 />
            </div>
          </div>
        </Route>

        {/* stage3 */}
        <Route path="/level3">
          <div className="cloud__class">
            <div className="bg top">
              <Level3 />
            </div>
          </div>
        </Route>
        {/* stage3 homepage */}
        <Route path="/stage3">
          <div className="cloud__class">
            <div className="bg top">
              <Stage3 />
            </div>
          </div>
        </Route>

        {/* default */}
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