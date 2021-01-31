import React from 'react';
import img from '../img/Work Schedule.JPG'
import img2 from '../img/Capture.PNG'
import img3 from '../img/comic.gif'
import img4 from '../img/weather.JPG'
import img5 from '../img/eatdaburger.gif'



const portfolio = () => {
    return (
        <section className="projects-section bg-light" id="projects">
        <div className="container">           
            <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                <div className="col-lg-6"><img className="img-fluid" src={img} alt="Work Schedule" /></div>
                <div className="col-lg-6">
                    <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                            <div className="project-text w-100 my-auto text-center text-lg-left">
                                <h4 className="text-white"><a href="https://chriskim0926.github.io/workday_schedule/">Portfolio 1) Work Schedule </a></h4>
                                <h6 className="text-white"><a href="https://github.com/chriskim0926/workday_schedule.git">Github Repo </a></h6>
                                <p className="mb-0 text-white-50">This app can organize your daily tasks as hourly planner</p>
                                <hr className="d-none d-lg-block mb-0 ml-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
             <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                <div class="col-lg-6"><img class="img-fluid" src={img4} alt="weather" /></div>
                <div class="col-lg-6">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h4 class="text-white"><a href="https://chriskim0926.github.io/workday_schedule/">Portfolio 2) Weather Forcast </a></h4>
                                <h6 class="text-white"><a href="https://github.com/chriskim0926/homework-weather1.git">Github Repo </a></h6>
                                <p class="mb-0 text-white-50">This app give current weather conditions and 5 days weather forcast according to your city search</p>
                                <hr class="d-none d-lg-block mb-0 ml-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
              <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                <div class="col-lg-6"><img class="img-fluid" src={img5} alt="Eat Da Burger" /></div>
                <div class="col-lg-6">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h4 class="text-white"><a href="https://infinite-garden-89612.herokuapp.com/">Portfolio 3) Eatdaburger </a></h4>
                                <h6 class="text-white"><a href="https://github.com/chriskim0926/burger.git">Github Repo </a></h6>
                                <p class="mb-0 text-white-50">Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat and waiting to be devoured. Once they have try the burger, user can update the list and go to the next burger to devour.</p>
                                <hr class="d-none d-lg-block mb-0 ml-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
              <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                <div class="col-lg-6"><img class="img-fluid" src={img2} alt="Holly Jolly" /></div>
                <div class="col-lg-6">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h4 class="text-white"><a href="https://hollyjollygenerator.herokuapp.com/">Portfolio 4) The Holly Jolly Generator </a></h4>
                                <h6 class="text-white"><a href="https://github.com/chriskim0926/Project2-Oxygen.git">Github Repo </a></h6>
                                <p class="mb-0 text-white-50"> The Holly Jolly Generator is to spread holiday cheer and joy in our communities during these difficult times, by creating an app that allows people to give gifts to less forutunate members of our communities, while saving time & physical resources.</p>
                                <hr class="d-none d-lg-block mb-0 ml-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
              <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                <div className="col-lg-6"><img class="img-fluid" src= {img3} alt="Combic" /></div>
                <div className="col-lg-6">
                    <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                            <div className="project-text w-100 my-auto text-center text-lg-left">
                                <h4 className="text-white"><a href="https://shelb-doc.github.io/ComicBook-Finder/">Portfolio 5) Comic Book Finder </a></h4>
                                <h6 className="text-white"><a href="https://github.com/chriskim0926/project-1.git">Github Repo </a></h6>
                                <p className="mb-0 text-white-50">A Comic Book Finder that is based off of a random number and some questions. A Character is generated from a pool based on the number that you give. Then you get a picture of the character. Next you get a little bio. Then you get the Comics and they are clickable to go to the Comic.</p>
                                <hr className="d-none d-lg-block mb-0 ml-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default portfolio;