import React, { Component } from 'react';
import './App.css';
import SignUp from './signup';
import * as firebase from 'firebase';
import Student from './pages/Student';
import Company from './pages/Company';
import Admin from './pages/Admin';
import Home from './pages/Home';
import{
BrowserRouter as Router,
Route,
Link
}from 'react-router-dom';
class App extends Component {
constructor(){
super();
this.state={
  speed:10,
};
 }

// componentDidMount(){
//   const rootRef =firebase.database().ref();
//   const speedRef =rootRef.child('speed');
//   speedRef.on('value',snap => {
   
//    this.setState({
//    speed:snap.val()
//    });

//   });
// }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Campus Recruitment System</h2>
        </div>
       
         <Router>
           <div>
             
              <Route exact path="/" component={Home}/>
              <Route path="/Student" component={Student}/>
              <Route path="/Company" component={Company}/>
              <Route path="/Admin" component={Admin}/>

              <Link to="/">Home</Link><br></br>
              <Link to="/Student">Student</Link><br></br>
              <Link to="/Company">Company</Link><br></br>
              <Link to="/Admin">Admin</Link>
           </div>
         </Router>
       
        
        <div className="loginPanel">
        
        
        {/*<SignUp/>*/}
        {/*<h1>{this.state.speed}</h1>*/}
        
        {/*<a href="Student.js" >Student login </a><br></br>
        <a href="Company.js" >Company login</a><br></br>
        <a href="Admin.js" >Admin login</a>*/}
        </div>      
      </div>
    );
  }
}
export default App;
