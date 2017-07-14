import React,{Component} from 'react';
import * as firebase from 'firebase';
import './LeftPanel.css';
import{
BrowserRouter as Router,
Route,
Link
}from 'react-router-dom';
class LeftPanel extends Component{
    constructor(){
        super();
        this.state={
            user:null
        }
    }
componentDidMount(){
  firebase.auth().onAuthStateChanged(()=>{

    var userId = firebase.auth().currentUser.uid;
  
    const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('USER/'+userId);
    speedRef.on('value',snap => {
      var userName= snap.val().name
      console.log(userName);
      this.setState({user: userName})
    });
  })
}
getDetail(){
    this.props.history.push('/StudentDetail');
}
viewjobs(){
  this.props.history.push('/ViewJobs');
}
render(){
    return(
      <div>
          {this.state.user?
           <div id="left-navigation">
           <h1>Student</h1>
           <h2>{this.state.user}</h2>
            <img src="title.jpg" alt="logo" height="250" width="250"/>
             <p><button onClick={this.getDetail.bind(this)}>Edit details</button></p>
             <p><button onClick={this.viewjobs.bind(this)}>View All Jobs</button></p>
             <p><Link to="/Student/CompanyList"><button>View companies</button></Link></p>
           </div>
            :
               <h4>please wait. . </h4>
            }
       </div>
       
    
            
         
    );
 }
}
export default LeftPanel;
