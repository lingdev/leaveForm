import './App.css';
import Form from './components/Form';
import Login from './components/Login';
import Register from './components/Register';
import Management from './components/Management';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
       <Route path="/" exact component={Login} />
          <Route path="/Login"  component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Management" component={Management} />
          <Route path="/Form" component={Form} />


          </Router>
     

  
    </div>
  );
}

export default App;
