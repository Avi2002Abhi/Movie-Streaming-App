import React, { useState } from 'react'
// b51c2ae00c6a895e012843839e3b8af5
import HeadItem from './HeadItem';
import { HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv
 } from "react-icons/hi2";
 import { HiPlus,HiDotsVertical } from "react-icons/hi";

function Header() {
  const[toggle,setToggle]=useState(false);
  const menu=[
    {
      menu:'HOME',
      icon:HiHome,
    },
    {
      menu:'SEARCH',
      icon:HiMagnifyingGlass,
    },
    {
      menu:'WATCH LIST',
      icon:HiPlus,
    },
    {
      menu:'ORIGINALS',
      icon:HiStar,
    },
    {
      menu:'MOVIES',
      icon:HiPlayCircle,
    },
    {
      menu:'SERIES',
      icon:HiTv,
    },
  ]
  return (
    <div className="flex w-full  items-center p-10 justify-between ">
        <div className="flex items-center gap-12">
           <div>
              <img className="  w-[80px] md:w-[115px] object-cover" src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" alt="" />
           </div>
           <div className="hidden md:flex gap-8">
           {menu.map((item)=>(
              <HeadItem name={item.menu} Icon={item.icon}/>
           ))}
           </div>
           <div className="flex gap-5 md:hidden">
           {menu.map((item,index)=>index<3&&(
              <HeadItem name={''} Icon={item.icon} />
           ))}
           <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
            <HeadItem name={''} Icon={HiDotsVertical} />
           {toggle? <div className="absolute mt-3 bg-[#121212]
            border-[1px] border-gray-700 px-5 py-4 p-3">
            {menu.map((item,index)=>index>2&&(
              <HeadItem name={item.menu} Icon={item.icon} />
            ))}
            </div> :null}
           
           </div>
           </div>
        </div>
        <div>
          <img className="rounded-full w-[60px]" src="https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg" alt="" />
        </div>
    </div>
   
        
        
  )
}

export default Header
