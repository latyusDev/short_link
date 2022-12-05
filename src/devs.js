import React from "react";

class Practise extends React.Component{

    render(){
        const {name,age,profession}  = this.props
        return (
        <div>
            <h1>name : {name}</h1>
            <h1>age :{age}</h1>
            <h1>profession : {profession}</h1>
        </div>
    )}
}
export default Practise