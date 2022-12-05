import React from "react";
import '../../../src/App.css'
import brand from '../../images/icon-brand-recognition.svg'
import customizable from '../../images/icon-fully-customizable.svg'
import detailed from '../../images/icon-detailed-records.svg'
const Advanced = ()=>{
    return(
        <div className="container">
          <div className="md:flex text-center items-center md:text-left">
        <div className="bg-white  rounded-[7px] relative px-[1.434rem] md:static  pb-8 lg:pb-0  lg:h-[257px]">
            <div className="bg-d_violet mx-auto rounded-full absolute  left-[37%] top-[-185px]  sm:left-[43%] md:static  mt-[9rem]  max-w-[80px] md:-mt-10 py-6 px-6">
            <img src={brand} alt="brand" className="mx-auto" />
            </div>
          <h1 className="text-[1.35rem] font-poppins font-[900] pt-[4.4rem] text-d_violet mb-3 md:pt-8">
          Brand Recognition
          </h1>
        <p className="text-g_gray text-[0.95rem] font-poppins mt-4 leading-[1.6] font-[500] ">
        Boost your brand recognition with each click. Generic links don’t 
       mean a thing. Branded links help instil confidence in your content.
        </p>
        </div>
        <div className="bg-cyan h-[87px] mx-auto w-[8px] md:h-[8px] md:w-[99px] lg:mt-11">

        </div>
        {/* detailed */}
        <div className="bg-white  rounded-[7px] relative px-[1.434rem] md:static md:mt-[5.3rem] pb-8 lg:pb-0  lg:h-[257px]">
        <div className="bg-d_violet mx-auto rounded-full absolute  left-[37%] top-[-185px]  sm:left-[43%] md:static  mt-[9rem] max-w-[80px] md:-mt-10 py-6 px-6">
        <img src={detailed} alt="detailed" className="mx-auto" />

            </div>
          {/* <h1 className="text-[1.35rem] font-poppins font-[900] pt-8 text-d_violet mb-3"> */}
          <h1 className="text-[1.35rem] font-poppins font-[900] pt-[4.4rem] text-d_violet mb-3 md:pt-8">

          Detailed Records
          </h1>
        <p className="text-g_gray text-[0.95rem] font-poppins mt-4 leading-[1.6] font-[500] ">
        
       Gain insights into who is clicking your links. Knowing when and where 
       people engage with your content helps inform better decisions.

        </p>
        </div>
        <div className="bg-cyan h-[87px] mx-auto w-[8px] md:h-[8px] md:w-[99px] lg:mt-11">

        </div>
        {/*Fully Customizable  */}
        <div className="bg-white  rounded-[7px] relative px-[1.434rem] md:static md:mt-[10rem] pb-8 lg:pb-0  lg:h-[257px]">
        <div className="bg-d_violet mx-auto rounded-full absolute  left-[37%] top-[-185px]  sm:left-[43%] md:static  mt-[9rem] max-w-[80px] md:-mt-10 py-6 px-6">
        
        <img src={customizable} alt="customizable"  className="mx-auto" />
            </div>
            <h1 className="text-[1.35rem] font-poppins font-[900] pt-[4.4rem] text-d_violet mb-3 md:pt-8">
          Fully Customizable
          </h1>
          
          <p className="text-g_gray text-[0.95rem] font-poppins mt-4 leading-[1.6] font-[500] ">
       
        Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement.
        </p>
        </div>
        {/*  */}
          </div>
        



        </div>
    )
}

export default Advanced