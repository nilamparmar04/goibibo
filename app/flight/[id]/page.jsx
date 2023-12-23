import React from 'react'

const SingleFlight = ({params}) => {
    console.log(params.id);
  return (
    <div>SingleFlight {params.id}</div>
  )
}

export default SingleFlight