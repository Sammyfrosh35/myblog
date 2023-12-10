import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './blogdetails';
import Notfound from './Notfound';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content"> 
      <Switch> 
        <Route exact path="/">
            <Home />
        </Route>
        <Route  path="/create">
            <Create />
        </Route>

        <Route  path="/blogs/:id">
            <BlogDetails ></BlogDetails>
        </Route>

        <Route path="*">
          <Notfound />
        </Route>
        </Switch>
      </div> 
    </div>
    </Router> 
  );
}

export default App;
