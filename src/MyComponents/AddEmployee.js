import React from 'react'
import { useState } from 'react'

export const AddEmployee = (props) => {

    const [employeename, setemployeename] = useState("")
    const [age, setage] = useState("")

    const submit = (e)=>{

        e.preventDefault();
        console.log("on submit called....")
        props.addEmployee(employeename,age)
    }


    return (
        <div className = "container my-3">
            <h3>ADD EMPLOYEE</h3>
            <form onSubmit ={submit}>

                <div class="mb-3">
                    <label for="employeeName" class="form-label">Employee Name</label>
                    <input type="text" value={employeename} onChange ={(e)=>{setemployeename(e.target.value)}} class="form-control" id="employeeName"  />
                </div>

                <div class="mb-3">
                    <label for="age" class="form-label">AGe</label>
                    <input type="age" value={age} onChange ={(e)=>{setage(e.target.value)}} class="form-control" id="age" />
                </div>
               
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>
    )
}
