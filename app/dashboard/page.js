"use client"
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

function Dashboard() {
    const { setTheme } =useTheme()

useEffect(()=>{
    setTheme('system');
},[])
  return (
    <div className='p-10'>
        <h2 className='font-bold text-2xl'>Dashboard</h2>

    </div>
  )
}

export default Dashboard