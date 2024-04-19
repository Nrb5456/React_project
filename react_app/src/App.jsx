import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
      <>
        <Router>
          <Switch>
            <Route path='/' />
          </Switch>
        </Router>
      </>
  )
}

export default App