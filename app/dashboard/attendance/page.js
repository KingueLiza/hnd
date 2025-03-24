
import GradeSelect from '@/app/_components/GradeSelect'
import MonthSelection from '@/app/_components/MonthSelection'
import React from 'react'
import { Button } from 'react-day-picker'

function Attendance() {
  return (
    <div className='p-10'>

       <h2 className='text-2xl font-bold'>Attendance</h2>
       {/* Search option */}

<div className='flex gag-4'>
    <div>
    <label>Select Month:</label>
    <MonthSelection/>
    </div>

    <div>
    <label>Select Grade:</label>
    <GradeSelect/>
    </div>
    <Button>Search</Button>
</div>

       {/*Student Attendance Grid*/}
        </div>
  )
}

export default Attendance
