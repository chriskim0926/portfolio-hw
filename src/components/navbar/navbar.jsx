import React from 'react';
import { Link, NavLink } from "react-router-dom";


const navbar = () => {
    return (

    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="/about">Chris Kim</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                {/* <li class="nav-item"><Link class="nav-link js-scroll-trigger" href="/about">About</Link></li>
                <li class="nav-item"><Link class="nav-link js-scroll-trigger" href="/portfolio">Portfolio</Link></li>
                <li class="nav-item"><Link class="nav-link js-scroll-trigger" href="/contact">Contact</Link></li> */}
                {/* <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/about">About</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/portfolio">Portfolio</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/contact">Contact</a></li> */}
                {/* <li class="nav-item"> <NavLink exact to="/about" className="nav-link" activeClassName= "nav-link active"> About </NavLink></li>
                <li class="nav-item"> <NavLink exact to="/portfolio" className="nav-link" activeClassName= "nav-link active"> Portfolio </NavLink></li>
                <li class="nav-item"> <NavLink exact to="/contact" className="nav-link" activeClassName= "nav-link active"> Contact </NavLink></li> */}
                <li className ="nav-item">
            <NavLink
              to="/about" className="nav-link js-scroll-trigger"
            >
              About
            </NavLink>
          </li>
          <li className ="nav-item">
            <NavLink
              to="/portfolio" className="nav-link js-scroll-trigger"
            >
              Portfolio
            </NavLink>
          </li>
          <li className ="nav-item">
            <NavLink
              to="/contact" className="nav-link js-scroll-trigger"
            >
              Contact
            </NavLink>
          </li>

         </ul>
        </div>
    </div>
</nav>

      
    )
}

export default navbar;