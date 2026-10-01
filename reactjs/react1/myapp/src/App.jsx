
import Data from "./components/Data"
import { User } from "./components/User"
const App = () => {
  const surn="DOE"
  const age=34;
  return (
    <>
    <User name="john" surname={surn}/>
    <Data name="john" a={age}/>
    </>
  )
}

export default App
