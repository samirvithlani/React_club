import React from 'react'
import { Link } from 'react-router-dom'

export const UsersList = (props) => {
    return (
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map((user) => {
                        return (
                            < tr >
                                <th scope="row"><Link to = {`/user/${user.id}`}>{user.id}</Link></th>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table >
    )
}
