import React from 'react'
import { Link } from 'react-router-dom'

export const MainHeader = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to = "/welcome">welcome</Link>
                    </li>
                    
                    <li>
                        <Link to = "/product">product</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
