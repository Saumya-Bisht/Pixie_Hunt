import logo from './logo.svg';
import './App.css';
import { useState} from "react"
import axios from "axios"
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import Images from './components/Images';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

 
const [images, setImages] = useState("")
const [buttonval,setButtonval]=useState([])

const getPhotos=()=>{
  axios.get(`https://api.unsplash.com/search/photos?page=1&query=${images}&client_id=1C5P9Wz04SbgQWyFcy-vmokN7oA5UCLdDq4heBUcvvQ`).then((res)=>setButtonval(res.data.results))
}

const showselected=(val)=>{
  setImages(val)
 getPhotos()
}

  return (
    <div className="App">
      <Header showselected={showselected} images={images} setImages={setImages} getPhotos={getPhotos} />
        <Images buttonval={buttonval} images={images} />
            <Footer/>
      
    </div>
  );
}

export default App;
