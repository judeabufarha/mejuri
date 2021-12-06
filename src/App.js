import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { HomePage } from './components/pages/HomePage';
import { Footer } from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
          <Footer/>
        </Route>
        <Route path="/jewelry/:id">
          <div>Individual jewelry Details</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;