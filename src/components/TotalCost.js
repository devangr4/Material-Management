import React from 'react'

const TotalCost = ({sumCost}) => {
  return (
    <>
      {sumCost.map((cost) => (
          <p>Total Cost = {cost.totalCost}</p>
      ))}
    </>
  )
}

export default TotalCost
