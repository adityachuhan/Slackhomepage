import React from 'react'

const Offer = () => {
  return (
   <section className='offer py-5' style={{backgroundColor:'#4a154b',clipPath:'ellipse(75% 100% at center top)'}}>
    <div className="container my-5  ">
         <h1 className='text-center display-4 fw-bold'>Welcome to your digital HQ</h1>
         <div className="my-5 burttonbox text-center">
        <button style={{padding:'15px 40px'}} className="mx-3 m-2 navbutton2 ">Talk to sales</button>
        <button style={{padding:'15px 40px'}}  className="mx-3 m-2 navbutton1">Talk to sales</button>
         </div>
    </div>
   </section>
  )
}

export default Offer
