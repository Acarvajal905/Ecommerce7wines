import React from "react";
import "../Styles/Home.css"
import { Link } from 'react-router-dom'

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
                <Link to={`/products`} >
                    <img src="https://cdn.discordapp.com/attachments/742768659256180832/747303674199408681/B0.jpg" class="d-block w-100" ></img>
                </Link>
            </div>
            <div class="carousel-item">
                <img src="https://cdn.discordapp.com/attachments/742768659256180832/747307812492804217/Bd1.jpg" class="d-block w-100" ></img>
            </div>
            <div class="carousel-item">
                <img src="https://cdn.discordapp.com/attachments/742768659256180832/747307808919257189/B2.jpg" class="d-block w-100" ></img>
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
