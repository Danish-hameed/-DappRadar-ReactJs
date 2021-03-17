import { Router, Route, Switch } from "react-router-dom";
import Header from "./header";
import Index from './Pages/Index/index';
import UserDetail from './Pages/UserDetail/userDetail';
import { Style } from './globalStyle';

const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();
function App() {

  return (
    <div className="App">
      <Style />
      <Router history={history} >
        <Header history={history}/>
        <Switch>
          <Route exact path="/" name="Index" component={Index} />
          <Route path="/user/:id" name="User Detail" component={UserDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
