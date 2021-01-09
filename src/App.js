//import "./App.css";
import { dummyTechtree } from "./lib/dummyTechtree";
import ConstellationGraph from "./components/ConstellationGraph";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <ConstellationGraph
        techtreeData={dummyTechtree.physics}
        category={"physics"}
      />
    </div>
  );
}

export default App;
