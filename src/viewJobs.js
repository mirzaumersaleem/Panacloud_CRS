import React,{Component} from 'react';
import './viewJobs.css';
import *as firebase from 'firebase';
export default class ViewJObs extends Component{
 constructor(){
        super();
    this.state={
        user:'',
        arr:[]
    }
 }
 componentDidMount(){

 
   const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('Job/');
    var userobj;
     speedRef.on('value',snap => {
      userobj=snap.val();
   debugger;
       this.setState({
         user:userobj         
     })
     
     })
     var table = document.getElementsByTagName('table')[0];
   var i=0;
    var td = document.createElement('td');
   speedRef.on("value", function(snap) {
   snap.forEach(function(child) {
    console.log(child.key+': '+child.val());
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerText = child.val()+ JSON.stringify(child.val());
    tr.appendChild(td);
  
    table.appendChild(tr);

// console.log("arr ki values change k baad " +this.state.arr);
  });

});

}


 render(){
     
     return(
            <div>
               <div class="panel-body">
                  <div class="table-responsive table-bordered">
                      <table class="table">
                         <thead>
                            <tr>
                              <th>#</th>
                                 <th>First Name</th>
                                <th>Last Name</th>
                                    <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>
           

     )};


}