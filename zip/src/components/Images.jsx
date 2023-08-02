import React from 'react'

function Images({images,buttonval}) {
  return (
    <div className="container">
                <div className="row text-center text-lg-start">
                <h2>{images.toUpperCase()} </h2>
                    {!images ? <div>
                      <img data-mdb-toggle="popover"
  title="Beautiful Images"
  data-mdb-content="And here's some amazing content. It's very engaging. Right?"
  data-mdb-trigger="hover"  className='img' src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80" />
                      <img data-mdb-toggle="popover"
  title="Beautiful Images"
  data-mdb-content="And here's some amazing content. It's very engaging. Right?"
  data-mdb-trigger="hover"  className='img' src="https://images.unsplash.com/photo-1501594852399-9b80db815224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" />
                      <img data-mdb-toggle="popover"
  title="Beautiful Images"
  data-mdb-content="And here's some amazing content. It's very engaging. Right?"
  data-mdb-trigger="hover"  className='img' src="https://images.unsplash.com/photo-1612725558359-fb598a53b380?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                      <img  data-mdb-toggle="popover"
  title="Beautiful Images"
  data-mdb-content="And here's some amazing content. It's very engaging. Right?"
  data-mdb-trigger="hover" className='img' src="https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" />
                      <img data-mdb-toggle="popover"
  title="Beautiful Images"
  data-mdb-content="And here's some amazing content. It's very engaging. Right?"
  data-mdb-trigger="hover"  className='img' src="https://images.unsplash.com/photo-1528825994654-33b2e6d5ac5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=411&q=80" />
                      <img data-mdb-toggle="popover"
  title="Beautiful Images"
  data-mdb-content="And here's some amazing content. It's very engaging. Right?"
  data-mdb-trigger="hover"  className='img' src="https://images.unsplash.com/photo-1604725333736-1f962a6218d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=402&q=80" />
                    </div> :
                    
                    buttonval.map((ele) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-6">
                          
                                    <img className="img-fluid img-thumbnail d-block mb-4 h-100" src={ele.urls.full} alt='' data-mdb-toggle="popover" title={ele.alt_description.toUpperCase()} data-mdb-content="And here's some amazing content. It's very engaging. Right?" data-mdb-trigger="hover"/>
                                 
                            </div>
                        )
                    })}
                </div>
   
            </div>
  )
}

export default Images