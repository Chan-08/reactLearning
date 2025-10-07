import Welcome from './components/welcome'
import Bootstrap from './components/bootstrap'
import ProbsExample from './components/probs'
import Navbar from './components/navbar'
import State from './components/state'

function App() {
  return <div>
            <Navbar/>
            <Welcome/>
            <Bootstrap/>
            <ProbsExample name="Chandrakumar" age={21}/>
            <State/>
        </div>
}

export default App
