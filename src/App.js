import LoginContainer from "./components/login/LoginContainer";
import { Route, Switch, Redirect, withRouter } from "react-router-dom"
import Main from "./components/main/Main";

function App(props) {
  return (
    <Switch>
      <Route path='/login' component={LoginContainer} />
      <Route path='/main' component={Main} />
      <Redirect from='/' to='/main' />
    </Switch>
  );
}

export default withRouter(App);