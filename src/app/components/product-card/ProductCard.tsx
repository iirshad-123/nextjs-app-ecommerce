"use client"
import React, { use } from 'react'


import { useState } from 'react'
import Link from 'next/link'
import './productcard.css'




function ProductCard(props:any) {
    const prod=props.product
    const[selectProduct,setSelectProduct]=useState({})

    const selectProd=()=>{
        console.log("selected product",prod)
        setSelectProduct(prod)
    }
  return (
    
  

    <Link href={'/products/'+prod.id}>
        
    <div onClick={selectProd} className='prod-container'>
        

        <div className='image-div'>
            <img src={prod.images} alt="" />

        </div>
            
            <div className='prod-title'>
                 {prod.title}
            </div>
            
            <div className='prod-category'>
                {prod.category}
            </div>
            <div>
                ${prod.price.toFixed(2)}
            </div>
       
        
    </div>

    </Link>
  )
}

export default ProductCard