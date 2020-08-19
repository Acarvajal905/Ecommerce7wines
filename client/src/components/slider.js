import React from 'react';
import { Link } from 'react-router-dom'
import "../Styles/slider.css"

export default function Slider() {                 

    return (
     
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://pdcvinosylicores.vteximg.com.br/arquivos/BannerEspana-WinecoMobile.png?v=637328698409500000" ></img>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://pdcvinosylicores.vteximg.com.br/arquivos/bannerEspana-mobile.png?v=637321707548070000" ></img>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://pdcvinosylicores.vteximg.com.br/arquivos/BannerCopaExpressMobile.jpg?v=637321692474130000" ></img>
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