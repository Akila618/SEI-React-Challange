import React from 'react'

function CardComponent({item}) {
  return (
    <div>
        {item.map((data) => (
            <div key={data.id}>
                <h1>{data.name}</h1>
                <h2>{data.email}</h2>
                <h3>{data.phone}</h3>
                <h4>{data.website}</h4>
            </div>        
        ))}
    </div>
  )
}

export default CardComponent