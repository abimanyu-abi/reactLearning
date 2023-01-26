

import Navbar from './navbar';
import Home from './Home';
import Create from './create';
import Blogdetails from './Blogdetails';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';

function App() {

  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/create'>
          <Create/>
        </Route>
        <Route path='/blog-details/:id'>
          <Blogdetails/>
        </Route>
      </Switch>   
      </div>
       
       
       </div>
    </Router>
  );
}

export default App;
