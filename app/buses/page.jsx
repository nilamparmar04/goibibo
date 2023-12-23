import React from 'react'


const getData = async () => {
  const res = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/bus?search={"source":"mumbai","destination":"chennai"}&day="Mon"`,{
      method:'GET',
      headers:{
        "projectID":"f104bi07c490"
      }
    });
    return res.json();
}

const Buses = async () => {
  // const data = await getData();
  // console.log(data)
  return (
    <div>Buses</div>
  )
}

export default Buses