import React from 'react'
const Pnavbar = (props) => {
  return (
    <>
      <nav style={{backgroundColor:'#3b0e3a'}} className=" nvbr navbar navbar-expand-lg">
        <div className="container-fluid mx-2">
            <a className="navbar-brand" href="/"><img src={props.logo}  alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <a className="mx-3 nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
                </li>
                <li className='mx-2' >
                <a className="nav-link  active text-light" aria-current="page" href="/">Pricing</a>
                </li>
                <li className='mx-2' >
                <a className="nav-link text-light" href="/">Solution</a>
                </li>
                
                <li className='mx-2' >
                <a className="nav-link text-light">Enterprise</a>
                </li>
            </ul>
            <div className="d-flex align-items-center" role="search">
                <i className="mx-2 fa-solid fa-magnifying-glass text-light"></i>
                <ul className="mx-2 navbar-nav ">
                    <li className="nav-item ">
                    <a className="nav-link text-light ">Sign in</a>
                    </li>
                </ul>
               
                <a className=' navbutton1' href="/"> TALK TO SALES</a>
                <a className=' navbutton2' href="/"> TRY FOR FREE</a>
            </div>
            </div>
        </div>
       </nav>
    </>
  )
}

export default Pnavbar