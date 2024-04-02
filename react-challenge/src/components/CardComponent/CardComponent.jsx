import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import './CardComponent.css'

function CardComponent({item}) {
  return (
    <div className='CardComponent'>
        {item.map((data) => (
            <div key={data.id} className="card text-center">
                <div className="card-body">
                  <h2 className="card-title">{data.name}</h2>
                  <h5 className="card-text">{data.email}</h5>
                  <h6 className="card-text">Contact: {data.phone}</h6>
                  <h6 className="card-text">Web: {data.website}</h6>
                </div>
                <div className="d-grid gap-2 col mx-auto">
                  <div className="btn btn-outline-primary">
                    <ButtonComponent linkurl='/userInfo' data={data}/>
                  </div>
                </div>
                
            </div>        
        ))}
    </div>
  )
}

export default CardComponent