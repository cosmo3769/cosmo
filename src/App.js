import React from 'react';
import {Route} from 'react-router-dom';
import "./App.css";
import Home from './components/home';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Resume from "./components/Resume";
import Projects from "./components/Projects";
// import Blog from "./components/blog";
//import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home}/>
      {/* <Route path="/resume" component={Resume}/> */}
      <Route path="/projects" component={Projects}/>
      {/* <Route path="/blogs" component={Blog}/> */}
      {/* <Route path="/contacts" component={Contacts}/> */}
    </>
  );
}

export default App;
  

