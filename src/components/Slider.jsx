import React, {useEffect, useRef, useState} from 'react'

import { HiChevronLeft,HiChevronRight } from "react-icons/hi";
import GlobalApi from '../Services/GlobalApi'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;
function Slider() {
  const [Movielist,setMovielist]=useState([]);
  const elementRef=useRef();
  useEffect(()=>{
    getTrendingMovies();
  },[])
const getTrendingMovies=()=>{
  GlobalApi.getTrendingVideos.then(resp=>{
    console.log(resp.data.results);
     setMovielist(resp.data.results);
  })
}

  
const sliderRight=(element)=>{
  element.scrollLeft+=screenWidth-117
}
 
const sliderLeft=(element)=>{
  element.scrollLeft-=screenWidth-117
}
  return (
    <div>
         <HiChevronLeft className=" hidden md:block text-[30px] absolute mx-8 mt-[150px] cursor-pointer" 
         onClick={()=>sliderLeft(elementRef.current)}/>
         <HiChevronRight className="hidden md:block text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-10"
          onClick={()=>sliderRight(elementRef.current)}/>
    <div className="flex overflow-x-auto w-full px-16 py-4
    no-scrollbar scroll-smooth" ref={elementRef}>
      {Movielist.map((item,index)=>(
             <img src={IMAGE_BASE_URL+item.backdrop_path} className="min-w-full md:h-[310px]  object-cover
             object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in" />
      ))}
    </div>
    </div>
  )
}

export default Slider






















