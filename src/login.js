import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
 
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
              <br></br>  <br></br>
          <AppBar style={{ backgroundColor: '#2196F3' }} title="Login"/>
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Sign in" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             <RaisedButton label="Sign Up now >" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;

/*import React,{Component} from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
class Login extends Component{
    constructor(){
  super();
  this.state={
    myInfo : {
        e_mail:'',
        password:''
        
    },
   
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
        <form>  
            <label><b>E-Mail :</b></label>
            <input id="input_email" type="email"
             placeholder="example:abc@xyz.com"
             value={this.state.myInfo.e_mail} 
             onChange={this.inputChange.bind(this,"e_mail")}/>
             <br></br>  <label><b>password :</b></label>
             <input type="password" placeholder="******"
             value={this.state.myInfo.password}
             onChange={this.inputChange.bind(this,"password")} 
             required={true}
             minLength={6}
             maxLength={15} 
             /><br></br>>
            <Button bsStyle="primary"  onClick={this.successMessage.bind(this)}><b>Create Account</b></Button>
         </form>
        </div>
    );
 }
}
export default Login;*/


























