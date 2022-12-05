import React, { useEffect, useState } from "react";
import Footer from "../FOOTER/footer";
import axios from "axios";
import Header from "../HEADER/header";
import Section1 from "../SECTIONS/section1";
import Section2 from "../SECTIONS/section2";
import Section3 from "../SECTIONS/section3";

const Parent = ()=>{

    const [value, setValue] = useState('')
    const [NewLink, setNewLink] = useState('')
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState('loading')
    const [allLinks, setAllLinks] = useState([])

    const fetchData = ()=>{
        axios.get(`https://api.shrtco.de/v2/shorten?url=${value}`)
        .then(data => {
            setNewLink(data.data.result.full_short_link)
            console.log(data.data)
            // setLoading('')
        })


    //    try{
    //     const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
    //     const data = await res.json()
    //     setNewLink(data.result.full_short_link)
    //     console.log(data)
    //     setLoading('')

    //    }catch(err){
    //     if(err){
    //         setErr('refresh the page, input the correct url or you are not connected to the internet ')
    //     }
    //    }
        
}

// const getLinks = ()=>{
//     fetchData()
  
// }
    return(
       <>
        <Header />
        <Section1 
        fetchData = {fetchData}
        value = {value} 
        setValue ={setValue}
        NewLink = {NewLink} 
        setNewLink={setNewLink}
        loading = {loading}
        setLoading = {setLoading}
        allLinks = {allLinks}
        setAllLinks ={ setAllLinks}
        setErr = {setErr}
        err= {err}


        // getLinks ={getLinks }
        />
        <Section2
        setNewLink={setNewLink}
        allLinks = {allLinks}
        loading = {loading}

        err = {err}
        setErr = {setErr}
         
         />
         <Section3 />
         <Footer />
       </>
    )
}


export default Parent
//     const fetchData = async()=>{

//         try{

//         const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${value.NewLink}`)
//         const dat = await res.json()
//         console.log(dat)
//         // setValue({...value, newLink:links.result.full_short_link})
//         console.log(value)
//         console.log(dat.result.full_short_link)

        
//     } catch(err){
//         alert(err)
//         console.log(err)
//     }
// }