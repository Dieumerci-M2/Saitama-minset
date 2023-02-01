import { BrowserRouter as Router } from 'react-router-dom'
import Road from './Routes/Routes'
import './components/Auth.css'

function App() {

  return (
    <div>
      <Router>
        <Road />
      </Router>
    </div>
  )
}

export default App
