import React from "react";
import '../../App.css'
import illustration from '../../images/illustration-working.svg'
import Button from "../BUTTON/button";
import Form from "./form";

const Section1 = ({value, getLinks ,loading, setLoading, err, setErr, setValue, fetchData, NewLink, setNewLink, allLinks, setAllLinks })=>{
    return(
        <section className="mt-8 relative text-center pb-[3.6rem] px-4 xlg:px-0 md:text-left">
         <div className="container justify-btween  ">
         <div className="md:max-w-[600px]  pt-[26.8rem] sm:pt-[35rem] md:pt-[9rem] ">
            <h1 className="text-[2.5rem]  leading-[1.1]  text-[#000] font-rubik font-[700] md:leading-[1.2] md:text-[4rem]">
            more than just shorter links
            </h1>
            <p className="md:w-[70%] text-g_gray leading-[1.8] font-poppins font-[500] text-[17px] mt-5 md:mt-0"> 
            Build your brand’s recognition and get detailed insights on how your links are performing. 
            </p>
            <Button 
            styleBtn="bg-cyan font-[700] capitalize px-10 text-[1.1rem] font-poppins py-[0.7rem] mt-7  rounded-[25px] text-[white] md:px-9   hover:bg-[#9BE3E2]"
            text='get started'
            />
           

            
         </div>

          <div className="ml-[2rem] overflow-hidden sm:h-[400px]  md:max-w-[590px]   absolute top-[67px] md:top-[80px] right-[0px] md:h-[400px]  ">
            <div className="mr-[-8.64rem] h-[100%] md:max-w-[400px] md:mr-[-6rem] lg:max-w-[700px]">

            <img src={illustration} alt={illustration} className='h-[100%]  -z-[1]  w-[100%] relative  ' />
            </div>
          </div>

         </div>
         <Form 
         value ={value}
         setValue={setValue} 
         fetchData ={fetchData}
         NewLink = {NewLink}
        setNewLink = {setNewLink}
        allLinks = {allLinks}
       setAllLinks = {setAllLinks}
       setErr= {setErr}
       err= {err}
       getLinks={getLinks}
       loading = {loading}
       setLoading = {setLoading}
         />
         
        </section>
    )
}

export default Section1

// 1 npm install gh-pages --save