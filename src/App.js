import react from 'react'
import Navbar from './components/Navbar/Navbar'
import {
  HashRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Pages/Home';
import Map from './components/Pages/Map';
import AboutMe from './components/Pages/AboutMe';

class App extends react.Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  render (){
  return <>
          <Router hashType = 'slash'>
            <Navbar />
            <Switch>
              <Route path='/' exact component =
              {Home} />
              <Route path='/Map' exact component = 
              {Map} />
              <Route path='/About' exact component = 
              {AboutMe} />
            </Switch>
          </Router>
        </>
  }
}

export default App
