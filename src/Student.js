import React, { Component } from 'react';

class Student extends Component{

    state ={
        name : "Haroon",
        age: "22year"
    };

    render(){
        return<h1>Hello, {this.state.name} your age is {this.state.age}<p>What Is 'State' in ReactJS? The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders</p></h1>;
        
    }
}
export default Student;