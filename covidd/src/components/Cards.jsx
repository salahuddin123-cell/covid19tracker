import React from 'react'

function Cards({data}) {
  return (
    
    <>
    {!data?'':
   
 <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div className="card infected ">
  
      <div class="card-body">
        <h5 class="card-title">Infected</h5>
        <h5>{data.confirmed.value}</h5>
        <p>{new Date(data.lastUpdate).toDateString()}</p>
        <strong class="card-text">Number of active covid cases</strong>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card recovered">
     
      <div class="card-body">
        <h5 class="card-title">Recovered</h5>
        <h5>{data.recovered.value}</h5>
        <p>{new Date(data.lastUpdate).toDateString()}</p>
        <strong class="card-text">Number of recovered people</strong>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card death">
      
      <div class="card-body">
        <h5 class="card-title">Deaths</h5>
        <h5>{data.deaths.value}</h5>
        <p>{new Date(data.lastUpdate).toDateString()}</p>
        <strong class="card-text">Number of Deaths</strong>
      </div>
    </div>
  </div>
 
</div>
 }
    </>
  )
}

export default Cards