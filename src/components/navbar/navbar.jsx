import React from 'react';
import { Link, NavLink } from "react-router-dom";


const navbar = () => {
    return (

    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Chris Kim</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><NavLink class="nav-link js-scroll-trigger" href="/about">About</NavLink></li>
                <li class="nav-item"><NavLink class="nav-link js-scroll-trigger" href="/portfolio">Portfolio</NavLink></li>
                <li class="nav-item"><NavLink class="nav-link js-scroll-trigger" href="/contact">Contact</NavLink></li>
            <li>
          </li>
            </ul>
        </div>
    </div>
</nav>

      
    )
}

export default navbar;