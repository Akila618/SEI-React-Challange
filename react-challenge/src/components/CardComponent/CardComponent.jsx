import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

function CardComponent({item}) {
  return (
    <div>
        {item.map((data) => (
            <div key={data.id} class="card text-center">
                <div class="card-body">
                  <h4 class=" display-4 card-title">{data.name}</h4>
                  <h4 class=" display-5 card-text">{data.email}</h4>
                  <h4 class="display-5 card-text">{data.phone}</h4>
                  <h1 class="display-6 card-text">{data.website}</h1>
                </div>
                <div class="d-grid gap-2 col-8 mx-auto">
                  <div class="btn btn-outline-primary">
                    <ButtonComponent linkurl='/userInfo' data={data}/>
                  </div>
                </div>
                
            </div>        
        ))}
    </div>
  )
}

export default CardComponent