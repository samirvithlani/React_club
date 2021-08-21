import React from 'react'
import { useParams } from 'react-router-dom'


export const ProductDetail = () => {
    const params = useParams();
    return (
        <div>
            product detail works
            <h4>{params.productId}</h4>
            <h4>{params.name}</h4>
        </div>
    )
}
