import TaskManager from "../components02/taskmanager"
import ProbsExample from "../components02/probs"
import Welcome from '../components02/welcome'
import Bootstrap from '../components02/bootstrap'
import State from '../components02/state'
import Onchange from '../components02/onchange'
import List from '../components02/list'

export default function Learning() {
return <>
                    <Welcome />
                    <Bootstrap />

                    <h1 className='mt-5'>Probs section</h1>
                    <ProbsExample name="Chandrakumar" age={21} show={true} />
                    <ProbsExample name="Name 2" age={23}/>
                    <ProbsExample show={true}/>
                    <p>there are three example but true is opted only for two</p>

                    <h1 className='mt-5'>Use State Section</h1>
                    <State />

                    <Onchange />

                    <List />

                    <TaskManager />
                  </>
}