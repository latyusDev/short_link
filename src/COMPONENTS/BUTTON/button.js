import React from "react";

const Button = ({styleBtn, type, text})=>{
    
    
    return(
        
        <button className={styleBtn} type={type}> {text} </button>   

    )
}
export default Button

{/* <button className="bg-cyan px-7 py-3 rounded-[25px] text-[white]  hover:bg-[#9BE3E2]"> Sign Up </button> */}
