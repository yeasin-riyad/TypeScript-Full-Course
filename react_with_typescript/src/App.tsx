import { UserCard } from "./components/01_RequiredOptionalProps"
import { GreetA, GreetB } from "./components/02_DefaultProps"


function App() {

  return (
    <>
    <UserCard id="1" name="Yeasin Riyad" subtitle="Software Engineer" />
    <GreetA/>
    <GreetA name="Raj"/>
    <GreetB name="Mr. Bean"/>
    </>
  )
}

export default App
