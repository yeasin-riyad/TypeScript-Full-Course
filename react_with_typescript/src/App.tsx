import { UserCard } from "./components/01_RequiredOptionalProps"
import { GreetA, GreetB } from "./components/02_DefaultProps"
import { Panel, RequiredChildrenPanel } from "./components/03_ChildrenReactNode"


function App() {

  return (
    <>
    <UserCard id="1" name="Yeasin Riyad" subtitle="Software Engineer" />
    <GreetA/>
    <GreetA name="Raj"/>
    <GreetB name="Mr. Bean"/>
    <Panel title="Panel Title" children={
      <ul>
        <li>Child 1</li>
        <li>Child 2</li>
        <li>Child 3</li>
      </ul>
    }/>

    <RequiredChildrenPanel title="Required Children Panel">
      <p>This is the content of the required children panel.</p>
    </RequiredChildrenPanel>

    </>
  )
}

export default App
