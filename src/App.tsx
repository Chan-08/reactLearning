import Welcome from './components/welcome'
import Bootstrap from './components/bootstrap'
import ProbsExample from './components/probs'
import Navbar from './components/navbar'

function App() {
  return <div>
            <Navbar/>
            <Welcome/>
            <Bootstrap/>
            <ProbsExample name="Chandrakumar" age={24}/>
            <ProbsExample name="Chandrakumar" age={24}/>
            <ProbsExample name="Chandrakumar" age={24}/>
            <ProbsExample name="Chandrakumar" age={24}/>
            <ProbsExample name="Chandrakumar" age={24}/>
        </div>
}

export default App
