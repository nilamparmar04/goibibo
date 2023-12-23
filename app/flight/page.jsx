// "use client"
import React from 'react'
import Navbar from '../components/Navbar';


const getData = async () => {
  const res = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"mumbai","destination":"delhi"}&day="Mon"`,{
    headers:{
      "projectID":"f104bi07c490"
    }
  });
  return res.json();
}

const Flight = async () => {
  // const data = await getData();
  // console.log(data);
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default Flight