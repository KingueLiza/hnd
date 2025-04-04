"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { GraduationCap, Hand, LayoutIcon, Settings } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {
  
const {user}=useKindeBrowserClient();
  const menuList=[
    {
       id:1,
       name:'Dashboard',
       icon:LayoutIcon,
       path:'/dashboard'

    },
    
    {
      id:2,
      name:'Students',
      icon:GraduationCap,
      path:'/dashboard/students'

    },
    {
      id:3,
      name:'Attendance',
      icon:Hand,
      path:'/dashboard/attendance'
    },
    {
      id:4,
      name:'Settings',
      icon:Settings,
      path:'/dashboard/settings'
    },


  ]
   const path=usePathname();
   useEffect(()=>{
    console.log(path)
   },[path])


   return (
    <div className="border shadow-md h-screen p-5">
      <Image 
        src={"/logo.svg" }
        width={180} 
        height={50} 
        alt="logo" 
      />
  
      <hr className="my-5" />
       
      {menuList.map((menu, index) => (
        <Link href={menu.path} key={menu.id}>
          <h2 className="flex items-center gap-3 text-md p-4
           text-slate-500
             hover:bg-primary
             hover:text-white
             cursor-pointer
             rounded-lg
             my-2">
            <menu.icon/>
            {menu.name}
          </h2>
        </Link>
      ))}

      <div className="flex gap-2 items-center">
        <Image 
          src={user?.picture || "/default-profile.png"} 
          width={35} 
          height={35} 
          alt="User Picture" 
          className="rounded-full"
        />
        <div>
          <h2>{user?.given_name} {user?.family_name}</h2>
          <h2>{user?.email}</h2>
        </div>
      </div>
  
      {/* Placeholder or Additional Content */}
      <div>
        {/* Add any additional content here */}
      </div>
    </div>
  )
}

export default SideNav;