import React from 'react'
import { GlobleInfo } from './App'
import { useContext } from 'react'


export const SuperChild = () => {
    const {color} = useContext(GlobleInfo);
    return (
        <div>
            <h3 style ={{color:color}}>Super Child</h3>
        </div>
    )
}
