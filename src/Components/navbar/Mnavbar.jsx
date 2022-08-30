import React from 'react'

const Mnavbar = (props) => {
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    if(window.screen.width<992){

        document.getElementById("navbar").style.top = "0px";
    }else{
        document.getElementById("navbar").style.top = "10px";

    }
  } else {
    document.getElementById("navbar").style.top = "-300px";
  }
}
  return (
    <div style={{backgroundColor:'transparent'}} id="navbar">
        <nav style={{backgroundColor:'whitesmoke'}} id = 'check' className="py-3 text-dark navbar navbar-expand-lg">
        <div className="container-fluid ">
            <a className="navbar-brand text-dark" href="/"><img src={props.logo}  alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <a className="mx-2 nav-link dropdown-toggle text-dark" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
                </li>
                <li className=" mx-2">
                <a className="nav-link  active text-dark" aria-current="page" href="/">Home</a>
                </li>
                <li className=" mx-2">
                <a className="nav-link text-dark" href="/">Link</a>
                </li>
                
                <li className=" mx-2">
                <a className="nav-link text-dark">Disabled</a>
                </li>
            </ul>
            <div className="d-flex align-items-center" role="search">
                <i className="mx-2 fa-solid fa-magnifying-glass text-dark"></i>
                <ul className="mx-2 navbar-nav ">
                    <li className="nav-item ">
                    <a className="nav-link text-dark ">Sign in</a>
                    </li>
                </ul>
               
                <a className='mx-2  navbutton3' href="/"> TALK TO SALES</a>
                <a className='mx-2  navbutton4' href="/"> TRY FOR FREE</a>
            </div>
            </div>
        </div>
       </nav>
    </div>
  )
}

export default Mnavbar
