import React from 'react'
import {Employee} from './Employee'

export const EmployeeList = (props) => {
    return (
        <div className="container">

            <h3 className = "text-center">EMPLOYEE LIST</h3>
            {
                props.EmployeeList.length <= 0? "NO Employee Found":
                props.EmployeeList.map((employee)=>{

                    return <Employee employee ={employee} key={employee.eId}onDelete ={props.onDelete}/>
                })
            }
            {/* <Employee employee ={props.EmployeeList[0]}/> */}
        </div>
    )
}
