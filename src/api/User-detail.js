import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

export const Userdetail = () => {

    const [user, setuser] = useState('')
    const params = useParams()

    useEffect(() => {
     
        fetchUser();
    })

    const style = {

        width: "18rem"
    }
    function fetchUser() {

        fetch(`https://reqres.in/api/users/${params.id}`).then(res => {

            return res.json();

        }).then(data => {

            //console.log(data.data)
            setuser(data.data)
        })

    }

    return (
        <div class="card" style={style}>
            <img class="card-img-top" src={user.avatar} />
            <div class="card-body">
                <h5 class="card-title">{user.first_name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{user.first_name}</li>
                <li class="list-group-item">{user.last_name}</li>
                <li class="list-group-item">{user.email}</li>
            </ul>
            <div class="card-body">

            </div>
        </div>
    )
}
