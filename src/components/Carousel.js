import React,{useState, useEffect} from 'react';
import { getSlider } from '../services/api';
import bgslider1 from '../images/bgslider1.svg'
import bgslider2 from '../images/bgslider2.svg'
import play from '../images/play.svg'
import {Link} from 'react-router-dom';


const Carousel = () => { 
    const [slider,setSlider]=useState([])
        
  useEffect(()=>{
    const fetchAPI= async () =>{
       const data=await getSlider();
       setSlider(data)
    }
    fetchAPI();
},[])

    return (
        <>
        <div className='container mt-5'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-md-6 col-sm-11 col-11 m-0 p-0'>
            <div id="carouselExampleControls" className="carousel slide mx-auto w-100" data-bs-ride="carousel">
  <div className="carousel-inner ">
{
slider.map((s,i)=>(
      <div key={s.id} className={i===0?"carousel-item active":"carousel-item"}>
        <div className="carousel-caption">
        <h5><button>
          <Link to={`details/${s.id}`} className='text-decoration-none'> شنیدن آهنگ <img src={play} alt="play" /></Link> 
          </button></h5>
        </div>
      
        <img src={s.album.image.cover.url} className="d-block w-100" alt="..." />
      </div>
))
    }
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  </div>
</div>


</>
    );
};

export default Carousel;