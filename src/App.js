import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import Create from './components/create.components';
import Edit from './components/edit.components';
import Index from './components/index.components';


class App extends Component{

    render() {
       return(
           <Router>
               <div className="container">
                   <nav className="navbar navbar-expand-lg navbar-light bg-light">
                       
                       <Link to={"/"} className="navbar-brand"> React CRUD EXAMPLE </Link>

                       <div className="collaps navbar-collapse " id="navbarSupportedContent">
                           <ul className="navbar-nav mr-auto">
                               <li className="nav-item">
                                   <Link to={'/'} className="nav-link">HOME</Link>
                               </li>

                               <li className="nav-item">
                                   <Link to={'/create'} className="nav-link">CREATE</Link>
                               </li>

                               <li className="nav-item">
                                   <Link to={'/index'} className="nav-link">INDEX</Link>
                               </li>

                           </ul>
                       </div>
                   </nav>
               </div>
               <br/>
               <h2>WELCOME REACT CRUD</h2> <br/>

               <switch>
               <Route exact path = '/create' component = {Create}/>
               <Route exact path = '/edit:id' component = {Edit}/>
               <Route exact path = '/index' component = {Index}/>
               </switch>
           </Router>
       );
    }
}

export default App;
