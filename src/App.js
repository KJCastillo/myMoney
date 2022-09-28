import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {user && <Home />}
              {/* if user is null, only shows login page */}
              {/* if there is a user, access to home page */}
            </Route>
          </Switch>
          <Switch>
            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
              {/* if there is a user, redirects to home after login */}
              {/* if user is null, only shows login page */}
            </Route>
          </Switch>
          <Switch>
            <Route path="/signup">
              {user && <Redirect to="/" />}
              {!user && <Signup />}
              {/* after signup, redirects to home */}
              {/* if user is null, shows sign up page */}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
