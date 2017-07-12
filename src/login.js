import React,{Component} from 'react';
// import './Company.css';
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
            <label>E-Mail</label><br></br><br></br>
            <input type="email" placeholder="example:abc@xyz.com" value={this.state.myInfo.e_mail} onChange={this.inputChange.bind(this,"e_mail")}/>
           <label><b>password</b></label>
            <input type="password" placeholder="password" value={this.state.myInfo.password} onChange={this.inputChange.bind(this,"password")} 
            required={true}
            minLength={6}
            maxLength={15} 
            />
            <button onClick={this.successMessage.bind(this)}><b>Create Account</b></button>
         </form>
        </div>
    );
 }
}
export default Login;