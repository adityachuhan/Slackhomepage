import React,{useRef} from 'react'

const Mainhome = () => {
    
    
  return (
   <>
   <section style={{background:' #3b0e3a',padding:' 80px 0px'}} className="mainhome">
        <div style={{overflowX:'hidden'}} className="home maibox d-flex align-items-center ">
            <div className="headline" style={{marginLeft:'45px'}}>
                <h1 style={{fontSize:'66px'}} >GREAT TEAMWORK STRATED WITH GREAT HQ</h1>
                <div style={{fontSize:'24px',margin:'27px 0px'}}>
                    <span style={{color: '#ffc768'}}>Slack is free to try </span>
                    <span>as long as you like</span>
                </div>
                <a className='navbutton2'>GET SLACK FOR ANDROID</a>
            </div>
            <div style={{marginRight:'-114px'}}  className="videobox">
            <video style={{maxWidth:'700px'}} autoPlay loop muted playsInline>
                <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.webm" type="video/webm"/>
                <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.mp4" type="video/mp4"/>
            </video>
            </div>

        </div>

   </section>
   </>
  )
}

export default Mainhome
