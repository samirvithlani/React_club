import React from 'react'
import { Link } from 'react-router-dom'

export const Product = () => {
    return (
        <div>
            <ul>
                <li><Link to = "/product/p1">CAR</Link></li>
                <li><Link to = "/product/p2">LAPTOP</Link></li>
                <li><Link to = "/product/p3">MObile</Link></li>
            </ul>
        </div>
    )
}
