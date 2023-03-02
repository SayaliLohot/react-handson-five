import './App.css';
import HOC from './Component/HOC'
import Comp1 from './Component/Comp1'
import PureComp from './Component/PureComp';
function App() {
  return (<>
    <div className="App">
      <div>
      <h2>Example of Higher Order Function</h2>
      {/* <Comp1/> */}
      <HOC data={Comp1}/>     
      </div>
      <hr/>
      <div>
        <h2>Example of Pure Component</h2>
        <PureComp/>
      </div>
      </div>
      </>
      
  );
}

export default App;
