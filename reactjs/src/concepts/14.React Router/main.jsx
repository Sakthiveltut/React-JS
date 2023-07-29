import { Home } from './home';
import { About } from './about';
import { Help } from './help';
import { BrowserRouter as Router, Route, Link, NavLink, Switch,Routes } from 'react-router-dom'  
import { NotFound } from './notFound';

export function ReactRouter(){
  return(
    <Router>
      <div>
        <h1>React Router</h1>
        <ul>
            <li>
                <Link to={"/home"}>Home</Link>
            </li>
            <li>
                <Link to={"/about"}>About</Link>
            </li>
            <li>
                <Link to={"/help"}>Help</Link>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink to={"/home"} activeStyle={{color:"red"}}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/about"} activeStyle={{color:"red"}}>About</NavLink>
            </li>
            <li>
                <NavLink to={"/help"} activeStyle={{color:"red"}}>Help</NavLink>
            </li>
        </ul>
      <Routes>
      <Route exact path={"/home"} element={<Home/>}></Route>
      <Route path={"/about"} element={<About/>}></Route>
      <Route path={"/help"} element={<Help/>}></Route>
      <Route path={"*"} element={<NotFound/>}></Route>
      </Routes>
      </div>
    </Router>
  )
}

