import Welcome from './components/welcome'
import Bootstrap from './components/bootstrap'
import ProbsExample from './components/probs'
import Navbar from './components/navbar'
import State from './components/state'
import Onchange from './components/onchange'
import List from './components/list'
import TaskManager from './components/taskmanager'

function App() {
  return <div>
            <Navbar/>
            <Welcome/>
            <Bootstrap/>
            <ProbsExample name="Chandrakumar" age={21}/>
            <State/>
            <Onchange/>
            <List/>
            <TaskManager/>

        </div>
}

export default App
