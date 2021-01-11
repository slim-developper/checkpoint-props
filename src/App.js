import React, { Component } from 'react'
import Profile from './Profile/Profile';
import './App.css';

export default class App extends Component {


  render() {
    function handlename(params) {
   alert(params);
  }
 return(
   
      <div class="App">
        <Profile fullName="Slim-Developer" 
        bio="I put computer technology at the service of biology. My job requires a double skill. I am not a biologist with vague computer skills, nor a computer scientist with basic biology. I am a real specialist in both fields. Thanks to his computer's calculations, the billions of data produced by the organization of genes can be used, analyzed and compared by biological researchers" 
         profession="developer"
         handleName={handlename}>


          <img src="hacker.jpg" alt=""  />

          

        </Profile>
      </div>)
  }
  
}


