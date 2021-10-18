
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact';
import About from './About'
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
