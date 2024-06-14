import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { HiChevronLeft,HiChevronRight } from "react-icons/hi";

function MovieList({genreId,index_}) {
    const [MovieList,setMovieList]=useState([]);
    const elementRef=useRef();
    
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }
     
const sliderRight=(element)=>{
    element.style.scrollBehavior = 'smooth';
    element.scrollLeft+=500;
  }
   
  const sliderLeft=(element)=>{
    element.style.scrollBehavior = 'smooth';
    element.scrollLeft-=500;
  }
  return (
   <div className=''>
     <HiChevronLeft className=" hidden md:block text-[50px] absolute mx-8 mt-[150px] z-[1] cursor-pointer" 
         onClick={()=>sliderLeft(elementRef.current)}/>
         <HiChevronRight className="hidden md:block text-[50px] absolute mx-8 mt-[150px] z-[1] cursor-pointer right-10"
          onClick={()=>sliderRight(elementRef.current)}/>
    <div className='flex overflow-x-auto no-scrollbar scroll-smooth 
    gap-8 pt-5 px-3 pb-5' ref={elementRef}>
        {MovieList.map((item,index)=>(
            <MovieCard movie={item}/>
        ))}
    </div>
   </div>
    
  )
}

export default MovieList