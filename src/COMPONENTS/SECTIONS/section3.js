import React from "react";
import Button from "../BUTTON/button";

const Section3 = ()=>{
    return(
        <section>

        <div className="bg-home4 h-[280px] bg-no-repeat bg-center3 bg-d_violet bg-cover  md:bg-center2 md:h-[200px] text-center md:bg-home">
            <h1 className="text-white text-[1.6rem] font-[700] pt-[5.8rem] md:pt-8 font-poppins  md:text-[2rem]">
            Boost your links today
            </h1>

            <Button 
            styleBtn="bg-cyan font-[700] capitalize px-8 text-[1.1rem] font-poppins py-[0.7rem] mt-4 rounded-[25px] text-[white] md:mt-5  hover:bg-[#9BE3E2]"
            text='get started'
            />
        </div>
        </section>
    )
}

export default Section3