import React from 'react'

const Lownav = (props) => {

  return (
    <section className={`lownav my-5 `}>
        <div className=" cnt notaccordion  justify-content-between ">
           <svg width="54" height="54" className="c-nav--footer__svgicon c-slackhash me-2" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#097eff"></path><path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#097eff"></path><path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ecb12f"></path><path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#ecb12f"></path></g></svg>
        <div className="cnntt d-flex ">
         <div className='d-flex flex-column text-dark'>
            <h6 className='fw-bold'>WHY SLACK?</h6>
            <a href="/"  className="anchor  text-decoration-none">Slack VS Email</a>
            <a href="/" className="anchor text-decoration-none">Channels</a>
            <a href="/" className="anchor text-decoration-none">Engagement</a>
            <a href="/"  className="anchor text-decoration-none">Scale</a>
            <a href="/"  className="anchor text-decoration-none">Watch the demo</a>
         </div>
         <div className='d-flex flex-column text-dark'>
            <h6 className='fw-bold'>PRODUCTS</h6>
            <a href="/"  className="anchor  text-decoration-none">Features</a>
            <a href="/"  className="anchor text-decoration-none">Integration</a>
            <a href="/"  className="anchor text-decoration-none">Enterprise</a>
            <a href="/"  className="anchor text-decoration-none">Solutions</a>
         </div>
         <div className='d-flex flex-column text-dark'>
            <h6 className='fw-bold'>PRICING</h6>
            <a href="/"  className="anchor  text-decoration-none">Subscriptions</a>
            <a href="/"  className="anchor text-decoration-none">Paid vs fee</a>
         </div>
         <div className='d-flex flex-column text-dark'>
            <h6 className='fw-bold'>RESOURCES</h6>
            <a href="/"  className="anchor  text-decoration-none">Partners</a>
            <a href="/"  className="anchor text-decoration-none">Community</a>
            <a href="/"  className="anchor  text-decoration-none">Developers</a>
            <a href="/"  className="anchor  text-decoration-none">Apps</a>
            <a href="/"  className="anchor  text-decoration-none">Blog</a>
            <a href="/"  className="anchor  text-decoration-none">Help centres</a>
            <a href="/"  className="anchor  text-decoration-none">Events</a>
         </div>
         <div className='d-flex flex-column text-dark'>
            <h6 className='fw-bold'>COMPANY</h6>
            <a href="/"  className="anchor  text-decoration-none">About us</a>
            <a href="/"  className="anchor text-decoration-none">Leadership</a>
            <a href="/"  className="anchor  text-decoration-none">Investor realations</a>
            <a href="/"  className="anchor  text-decoration-none">News</a>
            <a href="/"  className="anchor  text-decoration-none">Media kit</a>
            <a href="/"  className="anchor  text-decoration-none">Careers</a>
            <a href="/"  className="anchor  text-decoration-none">Events</a>
         </div>
         </div>
        </div>
        <div className="accordion" id="accordionExample">
         <div className="accordion-item">
               <h2 className="accordion-header" id="headingThreewhy">
                  <button className="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreewhy" aria-expanded="false" aria-controls="collapseThree">
                  WHY SLACK?
                  </button>
               </h2>
               <div id="collapseThreewhy" className="accordion-collapse collapse" aria-labelledby="headingThreewhy" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <div className='d-flex flex-column text-dark'>
                        <a href="/"  className="anchor  fs-6 text-decoration-none">Slack VS Email</a>
                        <a href="/" className="anchor fs-6 text-decoration-none">Channels</a>
                        <a href="/" className="anchor fs-6 text-decoration-none">Engagement</a>
                        <a href="/"  className="anchor fs-6 text-decoration-none">Scale</a>
                        <a href="/"  className="anchor fs-6 text-decoration-none">Watch the demo</a>
                     </div>
                  </div>
               </div>
            </div>
         <div className="accordion-item">
               <h2 className="accordion-header" id="headingThreePRODUCT">
                  <button className="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreePRODUCT" aria-expanded="false" aria-controls="collapseThree">
                  PRODUCTS
                  </button>
               </h2>
               <div id="collapseThreePRODUCT" className="accordion-collapse collapse" aria-labelledby="headingThreePRODUCT" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <div className='d-flex flex-column text-dark'>
            <a href="/"  className="anchor fs-6  text-decoration-none">Features</a>
            <a href="/"  className="anchor fs-6 text-decoration-none">Integration</a>
            <a href="/"  className="anchor fs-6 text-decoration-none">Enterprise</a>
            <a href="/"  className="anchor fs-6 text-decoration-none">Solutions</a>
         </div>
                  </div>
               </div>
            </div>
         <div className="accordion-item">
               <h2 className="accordion-header" id="headingThreePRICING">
                  <button className="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreePRICING" aria-expanded="false" aria-controls="collapseThree">
                  PRICING
                  </button>
               </h2>
               <div id="collapseThreePRICING" className="accordion-collapse collapse" aria-labelledby="headingThreePRICING" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <div className='d-flex flex-column text-dark'>
            <a href="/"  className="anchor fs-6  text-decoration-none">Subscriptions</a>
            <a href="/"  className="anchor fs-6 text-decoration-none">Paid vs fee</a>
         </div> 
                  </div>
               </div>
            </div>
         <div className="accordion-item">
               <h2 className="accordion-header" id="headingThreeRESURCE">
                  <button className="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeRESURCE" aria-expanded="false" aria-controls="collapseThree">
                  RESOURCES
                  </button>
               </h2>
               <div id="collapseThreeRESURCE" className="accordion-collapse collapse" aria-labelledby="headingThreeRESURCE" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <div className='d-flex flex-column text-dark'>
            <a href="/"  className="anchor fs-6  text-decoration-none">Partners</a>
            <a href="/"  className="anchor fs-6 text-decoration-none">Community</a>
            <a href="/"  className="anchor fs-6  text-decoration-none">Developers</a>
            <a href="/"  className="anchor  fs-6 text-decoration-none">Apps</a>
            <a href="/"  className="anchor  fs-6 text-decoration-none">Blog</a>
            <a href="/"  className="anchor  fs-6 text-decoration-none">Help centres</a>
            <a href="/"  className="anchor  fs-6 text-decoration-none">Events</a>
         </div>
                  </div>
               </div>
            </div>
         <div className="accordion-item bg-light">
               <h2 className="accordion-header" id="headingThreeCOMPANAY">
                  <button className="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeCOMPANAY" aria-expanded="false" aria-controls="collapseThree">
                  COMPANY
                  </button>
               </h2>
               <div id="collapseThreeCOMPANAY" className="accordion-collapse collapse" aria-labelledby="headingThreeCOMPANAY" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <div className='d-flex flex-column text-dark'>
            <a href="/"  className="anchor  fs-6 text-decoration-none">About us</a>
            <a href="/"  className="anchor fs-6 text-decoration-none">Leadership</a>
            <a href="/"  className="anchor  fs-6 text-decoration-none">Investor realations</a>
            <a href="/"  className="anchor  fs-6 text-decoration-none">News</a>
            <a href="/"  className="anchor  fs-6 text-decoration-none">Media kit</a>
            <a href="/"  className="anchor  fs-6 text-decoration-none">Careers</a>
            <a href="/"  className="anchor  fs-6 text-decoration-none">Events</a>
         </div>
                  </div>
               </div>
            </div>
         </div>
    </section>
  )
}

export default Lownav
