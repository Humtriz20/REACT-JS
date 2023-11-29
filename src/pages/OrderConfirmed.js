// import React from 'react'

import { useNavigate } from "react-router-dom"

export const OrderConfirmed = () => {
    const navigate =useNavigate()
  return (
    <>
    <div className="order">
    <button onClick={()=> navigate(-1)}>Go back</button>
    <div> you have successfully purchased your items</div>
    </div>
    </>
  )
}
