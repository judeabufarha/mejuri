import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { HomePage } from './components/pages/HomePage';
import { Footer } from './components/footer';
import { DetailsPage } from './components/pages/DetailsPage';

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
          <DetailsPage/>
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;