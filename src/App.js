import './App.css';
import CounterUseEffect from './components/use-state';
import ReadInput from './components/readInput';
import Renderlist from './components/renderlist/renderlist';
import UseEfx from './components/user-effect';

import Memo from './memo'

function App() {
  // const event = (e) => {
  //   console.log("Main APP")
  //   console.log()
  // }
  return (
    <div className="App">
      <h1 style={{
        border: "1px solid black",
        boxShadow: "0 0 5px black",
        padding: "10px",
        margin: "0 10px 0 10px"
      }}>Memo</h1>

      <div>
        <Memo />
      </div>

      
      <div className='Counter'>
        <CounterUseEffect />
      </div>
      
      <div className='UseEfx'>
        <UseEfx />
      </div>
      
      <div className='ReadInput'>
        <ReadInput />
      </div>
      <div className='Renderlist'>
        <Renderlist />
      </div>
   
      
    </div>  
  );
}
export default App;
