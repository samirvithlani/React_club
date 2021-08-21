import React from 'react'
import { Route } from 'react-router-dom'

export const Welcome = () => {
    return (
        <div>
            Welcome !!!
            <Route path ="/welcome/demo">
                DEMO loaded !!
            </Route>
        </div>
    )
}
