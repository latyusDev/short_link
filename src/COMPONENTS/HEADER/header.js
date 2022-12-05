import React, { useState, useRef } from "react";
import logo from '../../images/logo.svg'
import logo2 from '../../images/logo2.svg'
import '../../App.css'
import Button from "../BUTTON/button";
import hamburger from '../../images/icon-hamburger.svg'
import hamburger2 from '../../images/icon-hamburger2.svg'
import hamburger_close from '../../images/icon-close.svg'
import hamburger_close2 from '../../images/icon-close2.svg'
const Header = () =>{

  const [toggle, setToggole] = useState(false)
  const [height, setHeight] = useState(true)
  const refContainer = useRef(null)

  
  const handleToggle = ()=>{

    setToggole(!toggle)

 }
          let change = !toggle ? height ? hamburger : hamburger2 : height ? hamburger_close2 : hamburger_close
          
          window.onscroll = ()=>{
            const height = refContainer.current.getBoundingClientRect().height
            const windowHeight = window.pageYOffset
        
            if(windowHeight > height){
              setHeight(false)
        
            }else{
              setHeight(true)
        
            }
          }
          
          return(
      <section className="bg-[#FFFFFF] ">
          <header ref={refContainer} className={`${height ? " h-0  font-[700]  z-[99] bg-[#3B3054] md:bg-white fixed top-[0px] md:pt-8  right-[0px] left-[0px] md:mt-0 md:h-auto" : " opacity-[0.8]   bg-[#ccc] mt-0  py-6 md:py-6 md:mt-0   font-[700] mt-9  z-[99] fixed top-[0px]  right-[0px] left-[0px] "}`}>
         <div className="container  md:flex items-center gap-9">
        <div className={`${height ? "flex items-center justify-between  pt-10 md:pt-0 " : "flex items-center justify-between  pt-0 md:pt-0 "}`}>
          <div className="flex justify-between items-start  w-[100%]  px-6  md:w-auto lg:px-0">
          <div>
          <img src={height ? logo : logo2} alt='logo' />
          </div>
      <div className="block md:hidden mt-1">
      <img src={change} alt='logo' onClick={handleToggle} className="h-[20px]  w-[23px]" />
        
      </div >
          </div>

        </div>
       {/* nav */}
       
       <div className={ `${toggle ? "block fixed  left-[23px] right-[23px] top-[74px] text-center bg-d_violet  mt-6 flex flex-col   items-center pt-11 rounded-[10px] pb-10 md:pb-0 md:w-[100%]  md:static md:pt-0  md:text-left md:bg-whiteu  md:mt-0 md:flex-row md:justify-between md:w-[100%] " : "hidden md:block fixed  left-[23px] right-[23px] top-[74px] text-center bg-d_violet  mt-6 flex flex-col   items-center pt-11 rounded-[10px] pb-10 md:pb-0 md:w-[100%]   md:static   md:text-left md:bg-whsite md:pt-0 md:mt-0 md:flex-row md:justify-between md:w-[100%] "}`}>

       <div className={`${height ? "  fixed  left-[23px] right-[23px]  top-[74px] md:w-[100%] text-center bg-d_violet  mt-6 flex flex-col md:bg-white   items-center pt-11 rounded-[10px] pb-10 md:static md:pb-0 md:pt-0  md:text-left md:pt-0 md:mt-0 md:flex-row md:justify-between md:bg-white  " : "   md:bg-[#ccc] md:bg-whigte fixed  left-[23px] right-[23px] top-[74px] md:w-[100%] text-center bg-d_violet  mt-6 flex flex-col  items-center pt-11 rounded-[10px] pb-10 md:static md:pb-0  md:text-left md:pt-0 md:mt-0 md:flex-row md:justify-between  "}`}>
       <div className="">
         <ul className="flex flex-col gap-y-[1.5rem] md:flex-row md:gap-7 ">
         <li className="font-poppins text-white md:text-g_gray hover:text-v_d_violet "><a href="#"> Features</a></li>
         <li className="font-poppins text-white md:text-g_gray hover:text-v_d_violet "><a href="#"> Pricing</a></li>
         <li className="font-poppins text-white md:text-g_gray hover:text-v_d_violet "><a href="#"> Resources</a></li>
         </ul>
         </div>
        <div className=" px-6    w-[100%] md:w-auto">

        <div className=" border-t-[1px] border-g_gray  pt-7 mt-9 flex gap-8 flex-col  md:mt-0 md:pt-0 md:border-none md:flex-row">
            <button className="text-white font-[700] md:text-g_gray  " >
            Login
            </button>
            <Button 
             styleBtn="bg-cyan capitalize px-7 w-[100%] py-2 rounded-[22px] text-lg md:text-[1rem] md:rounded-[25px] text-[white] mr-3 md:mr-0 hover:bg-[#9BE3E2] md:w-auto xlg:mr-0"
            text="sign up"

             />
         </div>
        </div>
       </div>
        </div>
        </div>
 
       
  

        </header>
        
      </section>
    )
}

export default Header