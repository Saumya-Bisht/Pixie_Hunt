import React from 'react'

function Header({showselected,images,setImages,getPhotos}) {
  return (
    <>
    <h1><img src='https://static.wixstatic.com/media/a10910_8be39bd3058f42fbb55fa3caad6f2b49~mv2.png/v1/fill/w_191,h_79,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a10910_8be39bd3058f42fbb55fa3caad6f2b49~mv2.png'/></h1>
      <input className=" form" type="text" value={images} onChange={(e)=>setImages(e.target.value)} placeholder='Search for some image...'/>
      <button className="btn btn-info search" onClick={getPhotos}>Search</button>

      <div>
        <button className="btn btn-info buton" onClick={()=>showselected('mountains')}>Mountains</button>
        <button className="btn btn-info buton" onClick={()=>showselected('flowers')}>Flowers</button>
        <button className="btn btn-info buton" onClick={()=>showselected('beaches')}>Beaches</button>
        <button className="btn btn-info buton" onClick={()=>showselected('cities')}>Cities</button>
      </div>
    </>
  )
}

export default Header