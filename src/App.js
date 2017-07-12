import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Student from './pages/Student';
import Company from './pages/Company';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Login from './login';
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
            <h2 id="titlename">Campus Recruitment System</h2>
            <img id="headerImage" src="title.jpg" alt="logo"/>
        </div>
         <Router>
           <div>
              <Route exact path="/" component={Home}/>
              <Route exact path="/Student" component={Student}/>
              <Route exact path="/Company" component={Company}/>
              <Route exact path="/Admin" component={Admin}/>
             
              <Link to="/">Home</Link><br></br>   
              <Link to="/Student">Student Login</Link><br></br>
              <Link to="/Company">Company Login</Link><br></br>
              <Link to="/Admin">Admin Login</Link>
                
              <footer>
                   <p>Posted by: Mirza Umer</p>
                   <p>Contact information: <a href="mailto:mirzaumersaleem@outlook.com">
                    mirzaumersaleem@outlook.com.</a></p>
              </footer>
          </div>
         </Router>
        <div className="loginPanel">
       {/*<SignUp/>*/}
       {/*<h1>{this.state.speed}</h1>*/}
        </div>      
      </div>
    );
  }
}
export default App;
