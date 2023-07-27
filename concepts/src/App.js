import logo from './logo.svg';
import './App.css';
import Display1 from './concepts/1.import & export/Default export and import';
import { Display2 } from './concepts/1.import & export/Named export and import';
import { Props } from './concepts/3.props/props';
import {FC} from './concepts/2.component/FunctionalComponent'
import { SecondClass } from './concepts/2.component/ClassComponent';
import { ReactState } from './concepts/4.state/state';
import { LifeCycle } from './concepts/5.lifeCycle/lifeCycle';

function App() {
  return (
    <div className="App">

      <h2>Import and Export</h2>
      <Display1></Display1>
      <Display2></Display2>
      <hr></hr>

      <h2>Component</h2>
      <p>Components are independent and reusable bits of code.</p>
      <FC></FC>
      <SecondClass></SecondClass>
      <hr></hr>

      <h2>Props</h2>
      <Props name="samsung" price="10000"></Props>
      <hr></hr>

      <h2>State</h2>
      <ReactState></ReactState>
      <hr></hr>

      <h2>React-JS Life Cycle</h2>
      <LifeCycle></LifeCycle>
      <hr></hr>
      

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}

export default App;
