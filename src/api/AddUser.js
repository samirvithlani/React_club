import React from 'react'
import { useState } from 'react'

export const AddUser = (props) => {

    const [name, setname] = useState('')
    const [job, setjob] = useState('')

    const submit = (e) => {
        e.preventDefault();
        var user = {
            name: name,
            job: job
        }
        props.addUser(user)

    }

    return (
        <form onSubmit={submit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" placeholder="Enter name" onChange={(e) => { setname(e.target.value) }} />
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="text" class="form-control" placeholder="Enter Email" onChange={(e) => { setjob(e.target.value) }} />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>)
}
