import TaskManager from "../components02/taskmanager"
import ProbsExample from "../components02/probs"
import Welcome from '../components02/welcome'
import Bootstrap from '../components02/bootstrap'
import State from '../components02/state'
import Onchange from '../components02/onchange'
import List from '../components02/list'
import TechNotes from '../components/TechNotes'

export default function Learning() {
    return <>
        <Welcome />

        <TechNotes
            title="Welcome"
            react={["props"]}
            details={[
                "Parent renders <Welcome /> with given props.",
                "Component reads props and returns static JSX (no state).",
                "React diffing (reconciliation) updates DOM only if props change."
            ]}
        />

        <Bootstrap />

        <TechNotes
            title="Bootstrap"
            react={["jsx composition"]}
            details={[
                "Uses prebuilt CSS classes to style elements.",
                "No logic/state; React simply maps JSX to DOM nodes.",
                "Re-render is cheap as there's no dynamic data here."
            ]}
        />

        <h1 className='mt-5'>Probs section</h1>
        <ProbsExample name="Chandrakumar" age={21} show={true} />
        <ProbsExample name="Name 2" age={23} />
        <ProbsExample show={true} />
        <p>there are three example but true is opted only for two</p>

        <TechNotes
            title="ProbsExample"
            react={["props", "default props", "conditional rendering"]}
            details={[
                "Props arrive from parent: name, age, show.",
                "Component may provide defaults if props are missing.",
                "Conditional JSX renders only when show === true.",
                "Branching uses boolean expression; render work is O(1)."
            ]}
        />

        <h1 className='mt-5'>Use State Section</h1>
        <State />

        <TechNotes
            title="State"
            react={["useState", "event handling"]}
            details={[
                "useState creates an internal state cell tied to component instance.",
                "Event handler calls setState with next value.",
                "React batches updates and triggers a re-render.",
                "During re-render, state cell returns the new value for display."
            ]}
        />

        <Onchange />

        <TechNotes
            title="Onchange"
            react={["controlled input", "useState"]}
            details={[
                "Input's value prop is bound to state; DOM reflects state.",
                "onChange handler reads event.target.value and updates state.",
                "Every keystroke re-renders; optionally wrap handler with debounce to limit updates.",
                "Controlled pattern ensures single source of truth."
            ]}
        />

        <List />

        <TechNotes
            title="List"
            react={["list rendering", "keys", "conditional rendering"]}
            details={[
                "Takes an array and uses Array.map to produce JSX items.",
                "Stable keys let React match items across renders for minimal DOM work.",
                "Filtering/search is linear in number of items.",
                "Only changed items cause DOM updates after reconciliation."
            ]}
        />

        <TaskManager />
        <TechNotes
            title="TaskManager"
            react={["useState", "controlled input", "derived state"]}
            details={[
                "New task text is controlled by state; submit adds to tasks array.",
                "Toggle/complete maps items by id, creating a new array (immutability).",
                "Delete filters tasks by id; counts derived via Array.filter or reduce.",
                "React re-renders with new array reference; keys keep DOM stable."
            ]}
        />
    </>
}