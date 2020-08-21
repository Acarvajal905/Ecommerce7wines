import React from "react";
import "../Styles/Home.css"

export const Carrusel = () => {

  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://www.espaciovino.com.ar/media/slider/0001/62/thumb_61948_slider_big.jpeg" class="d-block w-100" ></img>
            </div>
            <div class="carousel-item">
                <img src="https://www.espaciovino.com.ar/media/slider/0001/62/thumb_61244_slider_big.jpeg" class="d-block w-100" ></img>
            </div>
            <div class="carousel-item">
                <img src="https://www.espaciovino.com.ar/media/slider/0001/61/thumb_60914_slider_big.jpeg" class="d-block w-100" ></img>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
  )
}

export default Carrusel;