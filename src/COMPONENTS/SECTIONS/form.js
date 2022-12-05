import React,{useState} from "react";
import Button from "../BUTTON/button";
import Link from "./link";

const Form = ({value, getLinks , setValue,   NewLink, fetchData, allLinks, setAllLinks})=>{

        const [ modal, setModal] = useState(false)
        // https://startling-dango-b61307.netlify.app
    const links = {value, NewLink, id:new Date().getTime().toString()}
   
    
    const handleLink = (e)=>{
        e.preventDefault()
        // console.log(links)
        if(!value){
            setModal(true)
            
        }
        else{
            fetchData()
            setModal(false)
            setTimeout(()=>{
    const links = {value, NewLink, id:new Date().getTime().toString()}
            
                setAllLinks([...allLinks, links])
                }, 4000)

        }
        
        
    }
    
    
    return(
        
       <div className="container">
         {/* <form onSubmit={handleLink} className={`${!modal ? " py-10 rounded-lg bg-home3 md:bg-home2 bg-[#3A3053] bg-bottom bg-cover bg-no-repeat md:bg-center md:w-[100%] mt-[8rem] mb-[-8rem] mx-[0.28rem] md:mx-0 px-3" :" pt-12 pb-6 rounded-lg bg-home2 bg-[#3A3053] bg-center bg-cover bg-no-repeat md:w-[100%] mt-[8rem] mb-[-8rem] mx-4 md:mx-0 px-3"}`}> */}
         <form className={`${!modal ? " py-10 rounded-lg bg-home3 md:bg-home2 bg-[#3A3053] bg-bottom bg-cover bg-no-repeat md:bg-center md:w-[100%] mt-[8rem] mb-[-8rem] mx-[0.28rem] md:mx-0 px-3" :" pt-12 pb-6 rounded-lg bg-home2 bg-[#3A3053] bg-center bg-cover bg-no-repeat md:w-[100%] mt-[8rem] mb-[-8rem] mx-4 md:mx-0 px-3"}`}>
            <div className=" justify-between  items-start px-4  md:px-9 lg:flex">

                <div className="lg:max-w-[778px]  w-[100%] ">
            <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} className={`${!modal ? " py-4 pl-6  rounded-lg outline-[4px] w-[100%]  outline-[#4B3F6B]" : "border-[4px] border-red py-4 pl-6  rounded-lg outline-[0] w-[100%]  "}`}  placeholder='shorten a link here' />

                { modal && <p className={ `${modal ? "text-red font-italics    animate-bounce mt-2  md:mt-1" : " mt-2 text-[green] font-italics md:mt-1 md:pl-14"}`}>{modal && 'please add a link'}</p>}
                    
                </div>           
            {/* <Button 
            styleBtn="w-[100%] bg-cyan font-[700] capitalize  text-[1.1rem] font-poppins py-4  rounded-lg text-[white] mt-5 lg:w-[18%] md:mt-8  lg:mt-0  md:px-8 hover:bg-[#9BE3E2]"
            text='shorten it!'
             type="submit"
            />  */}
            <button className="w-[100%] bg-cyan font-[700] capitalize  text-[1.1rem] font-poppins py-4  rounded-lg text-[white] mt-5 lg:w-[18%] md:mt-8  lg:mt-0  md:px-8 hover:bg-[#9BE3E2]"
             onClick={(e, getLinks)=>handleLink(e, getLinks)} 
             type="submit"
             >
            shorten it!
            </button>
            </div>
        </form>
       </div>
    )
}
export default Form
   
        // https://www.frontendmentor.io
    
        // const handleLink = (e)=>{
        //     e.preventDefault()
    
        //     if(!value){
        //         setModal(true)
    
        //     }else{
    
        //         setAllLinks([...allLinks, links])
        //         fetchData()
        //         setModal(false)
    
        //     }
            
            
        // }