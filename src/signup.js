import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import * as firebase from 'firebase'; 
class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      password:'',
      type:''
   }
  }


handleClick(event){
  
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(function(error) {
      // Handle Errors here.
     var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
     
    }).then(()=>{
     
         var uid = firebase.auth().currentUser.uid;
    //         var rootRef = firebase.database().ref();
    //  var storesRef = rootRef.child('Student');
    //  var newStoreRef = storesRef.set({
      firebase.database().ref('USER'+'/'+uid).set({
      name:this.state.name,
      Email:this.state.email,
      Pass:this.state.password,
      type:this.state.type

     });
      this.props.history.push('/Student');
  });

 
   
}

UserTypeSet(event){
this.setState({
  type:event.target.value
})
  console.log(this.state.type);
}
  render() {
    return (
   <div>
        <MuiThemeProvider>
          <div>
          <AppBar style={{ backgroundColor: '#2196F3' }} title="Sign Up"/>
            <div className="radioButton" onChange={this.UserTypeSet.bind(this)}>
                <input type="radio" value="student" name="user"/> Student 
               <input type="radio" value="company"  name="user"/> Company
            </div>
           <TextField
             hintText="Enter your Full Name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
           {/*<TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>*/}
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
            
          </div>
          
             
         </MuiThemeProvider>
           
            
      </div>
    );
  }
}

const style = {
  margin: 15,
};
export default SignUp;











/*//Form Validation Link :https://html5hive.org/reactjs-form-validation-tutorial/
//bootstrap Link :https://react-bootstrap.github.io/components.html#forms
import React,{Component} from 'react';
import  './SignUp_css.css';


class SignUp extends Component{
constructor(){
  super();
  this.state={
    myInfo : {
        fName:'',
        lName:'',
        e_mail:'',
        password:'',
        cPassword:''
    },
    fields:[],
    error:'this is error'
  }
}

successMessage(event){
    debugger;
    this.state.fields.push(this.state.myInfo);
    this.setState({
        fields : this.state.fields
    })
    event.preventDefault();
}

inputChange(changeValue,event){
 
    this.state.myInfo[changeValue] = event.target.value;

    // update state
    this.setState({
        myInfo : this.state.myInfo
    });
}

render(){
return(
   <div>
      <form className="signUp_css">  

            <br></br><br></br>
            <label><b>First Name</b></label>
            <input className="inputField" type="text" value={this.state.myInfo.fName} onChange={this.inputChange.bind(this,"fName")}
            required={true}
            minLength={6}
           maxLength={10}      
            />
            <br></br><br></br>
            <label><b> Last Name</b></label>
            <input type="text" value={this.state.myInfo.lName} onChange={this.inputChange.bind(this,"lName")}
            required={true}
            minLength={6}
            maxLength={10} 
            />
            <br></br><br></br>
            <label><b>E-mail</b></label>
            <input type="email" value={this.state.myInfo.mobileNo} onChange={this.inputChange.bind(this,"e_mail")}/>
            <p color='white'>{this.state.error}</p>
            <br></br><br></br>
            <label><b>New password</b></label>
            <input type="password" value={this.state.myInfo.password} onChange={this.inputChange.bind(this,"password")} 
            required={true}
            minLength={6}
           maxLength={10} 
            />
            <br></br><br></br>
            <label><b>Confirm New Password</b></label>
            <input type="password" value={this.state.cPassword} onChange={this.inputChange.bind(this,"cPassword")}
            required={true}
            minLength={6}
           maxLength={10} 
            />
            <br></br><br></br>
          
            <button onClick={this.successMessage.bind(this)}><b>Create Account</b></button>
       </form>

      

   </div>
)

}
}
export default SignUp;*/