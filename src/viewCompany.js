import React,{Component} from 'react';
import *as firebase from 'firebase';
export default class ViewCompany extends Component{

ViewComapnies(){
    var typeCheck;
    var userId = firebase.auth().currentUser.uid;
    const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('USER/'+userId);
    speedRef.on('value',snap => {
     typeCheck=snap.val().type;
     if(typeCheck==='student'){
       this.props.history.push('/Student');
     }
    if(typeCheck==='company'){
      this.props.history.push('/Company');
    }})
}

 constructor(){
        super();
    this.state={
        user:'',
        
    }
 }
render(){
return(
    <div>

    </div>
)

}

}