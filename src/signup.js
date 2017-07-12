//Form Validation Link :https://html5hive.org/reactjs-form-validation-tutorial/
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
export default SignUp;