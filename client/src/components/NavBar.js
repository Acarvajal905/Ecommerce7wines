import React from "react";
import "../Styles/Head.css"
import SearchBar from "./searchbar";

export const Home = () => {                 

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <SearchBar/>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/products">Catalogo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">----</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">----</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Home;