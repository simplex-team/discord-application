import React, {useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useHistory} from 'react-router-dom'
import { CLIENT_ID, redirects } from '../env'
import data from './data/data'
import Parallax from 'react-rellax'
import vid from './media/Planet Earth Revolving.mp4'
import './login.css'
const Login = () => {
    const history = useHistory()
    const url = `https://discord.com/api/v8/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirects}`
     
    return (
      <>
        <video playsInline autoPlay muted loop >
             <source src={vid} type="video/mp4" />
         </video>
        <Parallax speed={6}>
           <header>
            <img src="https://cdn.wallpapersafari.com/35/54/eMtx74.gif" alt="" />
          </header>
        </Parallax>
      <Parallax speed={4}>
    <section>
      <nav class="navbar navbar-expand-lg p-3">
        <div class="container">
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a
                  class="nav-link active btn text-light"
                  aria-current="page"
                  href={url}
                  ><i class="fab fa-discord text-primary mx-2"></i>
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
          </section>
       </Parallax>
            <Parallax speed={2}>
    <div class="container title">
          <div class="row">
        <div class="col text-center">
          <h2 class="text-light">Welcome To Gaming World</h2>
              </div>
      </div>
    </div>
              </Parallax>
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <h4 class="text-light">
            <i class="fas fa-gamepad ms-2 text-warning"></i> Custom Games
          </h4>
          <h6 class="lead text-light mt-3">
            We have custom games option where a wide range of options are given
            like competitive games, exclusive games and more.
          </h6>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <h4 class="text-light">
            <i class="fas fa-flag text-primary"></i> Range of Tournament
          </h4>
          <h6 class="lead text-light mt-3">
            We host many different tournaments such as Gaming , amvs and debate
            tournaments for cash prize , in server xp/currency +more.
          </h6>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <h4 class="text-light">
            <i class="fas fa-microphone-alt text-danger"></i> Public voice
            channels
          </h4>
          <h6 class="lead text-light mt-3">
            Many different public Voice channels in the server to choose from
            such as debate , music voice channels.
          </h6>
        </div>
        <div class="col-lg-4 col-md-6 col-12 content">
          <h4 class="text-light">
            <i class="far fa-calendar-alt text-primary"></i> Givaways and events
          </h4>
          <h6 class="lead text-light mt-3">
            Frequent giveaways for nitro , cash etc etc we also host events on
            discord server .
          </h6>
        </div>
        <div class="col-lg-4 col-md-6 col-12 content">
          <h4 class="text-light">
            <i class="fab fa-discord text-primary"></i> Techplus Discord
          </h4>
          <h6 class="lead text-light mt-3">
            We're a very active and amazing community aiming to connect gamers
            and fans world wide.
          </h6>
        </div>
      </div>
    </div>

    <div class="container server">
      <div class="row">
        <div class="col text-center">
          <p><strong class="text-primary text-bold">Discord</strong></p>
          <h2 class="text-white">Join Us On Our Discord Server!</h2>
          <a href="" class="btn btn-primary rounded-pill mt-4 btn-lg"
            >TechPlus</a
          >
        </div>
      </div>
        </div>
        <div class="container server">
      <div class="row w-100">
        <div class="col-12 text-center bg-dark p-3 copyright">
          <small>&copy; Copyright Techplus#6677 2021, All Rights Reserved</small>
        </div>
      </div>
    </div>

    {/* <div class="container  bg-primary">
      <div class="copyright text-white text-center  my-3">
        <small>&copy; Copyright Techplus#6677 2021, All Rights Reserved</small>
      </div>
    </div> */}
	</>
    )
}

export default Login
