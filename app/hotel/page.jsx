// 'use client'
import React from 'react'

const getData = async () => {
  const res = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/hotel/?search={'location':'mumbai'}",{
    method:'GET',
    headers:{
      "projectID":"f104bi07c490"
    },
    body:{
      day:"Fri"
    }
  });
  return res.json();
}

const Hotel = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>Hotel</div>
  )
}

export default Hotel