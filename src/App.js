
import './App.css';
import { Button, Col, Row } from 'react-bootstrap';
import Navigation from './Component/NavigationBar/Navigation';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Switch>
          <Route path="/" >
            <Home/>          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
