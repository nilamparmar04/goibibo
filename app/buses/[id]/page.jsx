import React from 'react'

const getData = async (id) => {
    const res = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/bus/${id}`,{
      headers:{
        "projectID":"f104bi07c490"
      }
    });
    return res.json();
}

const BusDetail = async ({params}) => {
    const {data} = await getData(params.id);
    console.log(data);
  return (
    <div>BusDetail</div>
  )
}

export default BusDetail