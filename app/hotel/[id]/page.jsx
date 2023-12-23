import React from 'react'

const getData = async (id) => {
    const res = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel/${id}`,{
      method:'GET',
      headers:{
        "projectID":"f104bi07c490"
      }
    });
    return res.json();
}

const HotelDetail = async ({params}) => {
    console.log(params);
    const {data} = await getData(params.id);
    console.log(data);
    return (
        <div>HotelDetail {data.name}</div>
    )
}

export default HotelDetail