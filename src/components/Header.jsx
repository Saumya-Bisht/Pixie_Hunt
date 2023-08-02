import React from 'react'

function Header({showselected,images,setImages,getPhotos}) {
  let clear=()=>{
    setImages("")
  }
  return (
    <>
    <h1 id='h1'><img width="150" src='https://as1.ftcdn.net/v2/jpg/05/75/89/34/1000_F_575893491_KUYtkeG1UDKi3bEfjDiW342J2SnsEstW.jpg'/></h1>
    <h1 id='h1two'>PIXIE HUNT 📸</h1>
   
      <input className=" form" type="text" value={images} onChange={(e)=>setImages(e.target.value)} placeholder='Search for some image...'/>
      <button className="btn btn-info search" onClick={getPhotos}>Search</button>
      <button onClick={clear} className="btn btn-info buton">Clear</button>

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