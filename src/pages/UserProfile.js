import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const UserProfile = () => {
    //so we can fetch data of any userprofiles using API calls by using Ueeffect

    //so we will extract the userId parameter
   const {userId}= useParams //destructing it with {}
  const navigate = useNavigate()
   
  const goback =()=>{
    navigate('/users')
  }
  return (<>
    <button onClick={goback}>Back</ button>
    <div>Details about UserProfile{userId}</div>
    {/* <h2>{username}</h2> */}
    {/* we are trying to get the username from the API to be displayed  */}
    </>
  )
}
