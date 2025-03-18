import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';


const pagination = true;
const paginationPageSize = 10;
const paginationPageSizeSelector = [25, 50, 100];
function StudentListTable({studentList}) {

    const CustomButtons=(props)=>{
        return <Button variant="destructive"><Trash/></Button>
    }

    const[colDefs,setColDefs]=useState([
        {field:"id",filter:true},
        {field:"name", filter:true},
        {field:"address",filter:true},
        {field:"contact",filter:true},
        {field:'action',cellRenderer:CustomButtons}
    ])

    const[rowData,setRowData]=useState();

    useEffect(()=>{
        studentList&&setRowData(studentList)
       setRowData(studentList)
    },[studentList])
  return (
    <div>
        <div
        className="ag-theme-quartz"
        style={{ height: 500 }}
        >

        <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}

        />
    

        </div>
    </div>
  )
}

export default StudentListTable