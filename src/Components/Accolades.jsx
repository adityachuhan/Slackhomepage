import React from 'react'

const Accolades = () => {
  return (
    <section className='accolades'>

    <div className="container text-center text-dark">
        <h1 className='display-4 fw-bold'style={{marginTop:'122px'}}>Teams large or small rely on Slack</h1>
        <p className='my-4' style={{fontSize:'18px'}}>Slack securely scales up to support collaboration at the world’s biggest companies.</p>
        <div className="container flesh d-flex">
            <a href="/"className="mx-3 my-2 buttonaccolade1">MEET SLACK FOR ENTETPRISE</a>
            <a href="/"className="mx-3 my-2 buttonaccolade2">TALK TO SALES</a>
        </div>
    </div>
    <div className="container text-dark" style={{marginTop:'90px'}}>
        <div className="percentbox d-flex align-items-center ">
            <div style={{width:'200px'}}>
             <h1 className='display-1 fw-bold'>85%</h1>
             <p className='fw-bold'>of users says that Slack has improved communication*</p>
            </div>
            <div style={{width:'200px'}}>
             <h1 className='display-1 fw-bold'>86%</h1>
             <p className='fw-bold'>feel their ability to work remotely has improved*</p>
            </div>
            <div style={{width:'200px'}}>
             <h1 className='display-1 fw-bold'>88%</h1>
             <p className='fw-bold'>feel more connected to their teams*</p>
            </div>
        </div>
    </div>
    <div className="ladderbox d-flex  " style={{marginTop:'98px',marginBottom:'48px'}}>
        <div className="laddervideo">
        <video style={{maxWidth:'592px',borderRadius:' 0px 165px 165px 0px'}} autoPlay loop muted playsInline>
                <source src="https://a.slack-edge.com/93eaeb3/marketing/img/features/customer-awards/customer-awards-tmobile-quote-610x305@2x.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="laddertext text-dark my-3" style={{marginRight:'25px'}}>
          <p className='' style={{fontSize:'23px'}}>
         <i> We were able to create a large virtual network of employees that can communicate as though they are together. There was a lot of disruption in terms of where we worked, but in terms of how we worked – very little disruption.’</i>
          </p>
           <p className='fw-bold' style={{marginBottom:'0px',marginTop:'25px'}} >
            Mark Smith
           </p>
           <p>
           Senior Technical Product Manager, T-Mobile
           </p>
          <a className='specialanchor' href="/">See more customer stories &rarr;</a>

        </div>
    </div>
    <p className='text-center text-dark' style={{fontSize:'14px'}}>* Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</p>
    </section>
  )
}

export default Accolades