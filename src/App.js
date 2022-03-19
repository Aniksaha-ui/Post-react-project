import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Posts />
          </Route>
          <Route path="/posts/:id" exact>
            <PostDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
