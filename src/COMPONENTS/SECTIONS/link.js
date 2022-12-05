import React, { useState } from "react";
import Button from "../BUTTON/button";

const Link = ({value, NewLink, loading})=>{
    const [bg, setBg] = useState(true)
    const copy = ()=>{
        navigator.clipboard.writeText(NewLink)
        setBg(false)
}

    return(                         
        
        <li className="   justify-between items-center bg-[white] mb-4 rounded-lg pt-3 pb-4 md:py-3 md:flex  md:pr-8 md:pr-7">
        <p className=" px-4 text-ellipsis overflow-hidden mt-1 font-[500] font-poppins text-[1.2rem] pb-2 border-b border-b-[#ccc] md:border-none">{value}</p>
            <div className=" px-4 md:flex gap-6 items-center md:pr-7 md:pl-8">
                <p className="  text-cyan mt-3 mb-3 font-[500] font-poppins text-[1.06rem] md:text-[1.2rem] md:mt-1">{NewLink}</p>
                <button
                onClick={copy}
            className={bg ? `${" w-[100%] bg-cyan font-[700] capitalize px-8 text-[0.8rem] font-poppins py-[0.67rem]  rounded-[6px] text-[white] md:w-max-content hover:bg-[#9BE3E2]"}`: " w-[100%] bg-[#3A3053] font-[700] capitalize px-8 text-[0.8rem] font-poppins py-[0.67rem]  rounded-[6px] text-[white] md:w-max-content  hover:bg-[#75679b]"}
            >{bg ? 'copy' : 'copied!'}</button>
            </div>
        </li>
        
        
    )
}

export default Link

// https://www.frontendmentor.io
// https://lordtech.com