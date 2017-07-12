import React,{Component} from 'react';
import '../Student.css';
import Login from '../login';
import SignUp from '../signup'
export default class Student extends Component{
render(){
    return(
        <div id="loginFIeld">
            <Login/>
           < h1>Student</h1>
           <SignUp/>
        </div>
    );
 }
}