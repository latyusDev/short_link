import React from "react";
import Link from "./link";
import '../../../src/App.css'
import Button from "../BUTTON/button";
import Advanced from "./advanced";

const Section2 = ({setValue, loading, err,  allLinks})=>{

    return(
        <section  className=" px-5 bg-[#F0F1F6]  pt-14  pb-[6.56rem] xlg:px-0">

        <ul className="container  pt-[2rem] pb-14 ">
            
            {
                err === '' ? allLinks.map(allLink => {
                    const {value, NewLink} =  allLink
                    return(
                        <Link value = {value} loading={loading}  NewLink ={NewLink} setValue = {setValue} key={allLink.id}/>
                    )
                }): <h1 className="text-red text-lg md:text-[2rem] text-center mt-14">{err}</h1>
            }
            
        </ul>
            
        <div className="mt-[2rem]  mx-auto max-w-[470px] mb-[6.6rem] text-center md:mb-[1rem]">

        <h1 className=" font-poppins font-[900] text-[1.67rem] md:text-[2.05rem]">Advanced Statistics</h1>
         
        <p className="text-g_gray font-poppins mt-3 font-[500]"> Track how your links are performing across the web with our 
         advanced statistics dashboard.</p>
        </div>
        <Advanced />
        </section>
    )
}

export default Section2