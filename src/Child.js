import React from 'react'
import { GlobleInfo } from './App'
import { useContext } from 'react'

export const Child = () => {
    const {color} = useContext(GlobleInfo);
    
    return (
        <div>
            <h2 style = {{color:color}}>CHILD Component</h2>
        </div>
    )
}
