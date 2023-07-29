import logo from './logo.svg';
import './App.css';
import Display1 from './concepts/1.import & export/Default export and import';
import { Display2 } from './concepts/1.import & export/Named export and import';
import {FC} from './concepts/2.component/FunctionalComponent'
import { SecondClass } from './concepts/2.component/ClassComponent';
import { Props } from './concepts/3.props/props';
import { ReactState } from './concepts/4.state/state';
// import { LifeCycle } from './concepts/5.lifeCycle/lifeCycle';
import { EventHandler } from './concepts/6.Event Handler/method3';
import { ReactStyle } from './concepts/7.React style/style';
import { ReactSASS } from './concepts/8.SASS/reactSASS';
import { ReactForm } from './concepts/9.forms/form1';
import { ReactForm2 } from './concepts/9.forms/form2';
import { ReactF1 } from './concepts/10.React Fragment/fragment';
import { ReactList } from './concepts/11.list/list';
import { ReactKey } from './concepts/12.React key/key1';
import { MyList } from './concepts/12.React key/key2';
// import { ReactHook } from './concepts/13.React Hook/useState';
import { ReactRouter } from './concepts/14.React Router/main';



function App() {
  const myValue = [
    {id:1,title:"first",content:"Keys help React identify which items have changed, are added, or are removed."},
    {id:2,title:"second",content:" Keys should be given to the elements inside the array to give the elements a stable identity."}
]
  const myData = [1000,2000,3000,4000,5000]

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
      {/* <LifeCycle></LifeCycle> */}
      <div id="container"></div>
      <hr></hr>
      
      <h2>Event Handler</h2>
      <EventHandler></EventHandler>
      <hr></hr>

      <h2>React Style</h2>
      <ReactStyle></ReactStyle>
      <hr></hr>

      <h2>SASS</h2>
      <ReactSASS></ReactSASS>
      <hr></hr>

      <h2>React Form</h2>
      <ReactForm2></ReactForm2>
      <hr></hr>

      <h2>React Fragment</h2>
      <ReactF1></ReactF1>
      <hr></hr>

      <h2>React List</h2>
      <ReactList></ReactList>
      <hr></hr>

      <h2>React Key</h2>
      <ReactKey data={myValue}></ReactKey>
      <MyList myValue={myData}></MyList>
      <hr></hr>
      
      <h2>React Hook</h2>
      {/* <ReactHook></ReactHook> */}
      <hr></hr>

      <h2>React Router</h2>
      <ReactRouter></ReactRouter>
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

export function Application(){
  return(
    <>
    <div id="container">
      <h3>Application</h3>
    </div>
    </>
  )
}
