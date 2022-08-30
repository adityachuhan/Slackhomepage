import React from 'react'

const Ladder = () => {
  return (
<section className="ladder " style={{backgroundColor:'#f4ede4'}}>
    <div className="ladderbox d-flex  " style={{marginBottom:'48px'}}>
        <div className="laddervideo">
        <video style={{maxWidth:'592px'}} autoPlay loop muted playsInline>
                <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.webm" type="video/webm"/>
                <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="laddertext text-dark my-3" style={{marginRight:'100px'}}>
          <h2 className='display-4 fw-bold'>Bring your team togathe</h2>
          <p className='my-3 ' style={{fontSize:'19px'}}>
          At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.
          </p>
          <a className='specialanchor' href="/">Learn more about channels &rarr;</a>

        </div>
    </div>
    <div className="ladderbox ldb3 d-flex  " style={{margin:'96px 0px'}}>
        <div className="laddertext text-dark my-3" >
          <h2 className='display-4 fw-bold'>Bring your team togathe</h2>
          <p className='my-3 ' style={{fontSize:'19px'}}>
          At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.
          </p>
          <a className='specialanchor' href="/">Learn more about channels &rarr;</a>
        </div>
        <div className="laddervideo">
        <video style={{maxWidth:'592px'}} autoPlay loop muted playsInline>
                <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/flexibility.webm" type="video/webm"/>
                <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/flexibility.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
    <div className="ladderbox d-flex  " style={{marginTop:'98px',marginBottom:'48px'}}>
        <div className="laddervideo">
        <video style={{maxWidth:'592px'}} autoPlay loop muted playsInline>
                <source src="https://a.slack-edge.com/221d25b/marketing/img/homepage/e2e-prospects/animations/webm/speed.webm" type="video/webm"/>
                <source src="https://a.slack-edge.com/7460822/marketing/img/homepage/e2e-prospects/inline/animations/mp4/speed.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="laddertext text-dark my-3" style={{marginRight:'100px'}}>
          <h2 className='display-4 fw-bold'>Bring your team togathe</h2>
          <p className='my-3 ' style={{fontSize:'19px'}}>
          At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.
          </p>
          <a className='specialanchor' href="/">Learn more about channels &rarr;</a>

        </div>
    </div>
</section>
  )
}

export default Ladder
