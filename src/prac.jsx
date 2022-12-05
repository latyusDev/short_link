import React from "react";

class Devs extends React.Component{
    render(){
        const {name,age,skill} = this.props
        return (
              <div>
                <p>name : {name}</p>
                <p>age : {age}</p>
                <p> skill : {skill}</p>
              </div>
            )
    }
}

export default Devs