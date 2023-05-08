import React from 'react'

function Home() {
  return (
    <div>
        <img className='m-2' src='https://plus.unsplash.com/premium_photo-1682310231531-148748e7684f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80' alt='img' style={{width:"99vw",height:"100vh"}}></img>
        <div>
            <div className="hero" style={{position:"absolute",bottom:"25%",left:"7%"}}>
            <h1 style={{textAlign:"center",fontSize:"3rem",fontWeight:"800",color:"white",textShadow:"2px 2px 4px #000000"}}>Getting vaccinated is a small needle for a big difference</h1>
            <br></br>
            <p  style={{color:"#eeee",textAlign:"center",fontSize:"1.3rem",fontWeight:"700",padding:"0rem 0 2rem 0",textShadow:"2px 2px 4px #000000"}}>Choose your Bookings</p>
            <a href="#"style={{display:"flex",justifyContent:"center",textDecoration:"none",backgroundColor:"white",borderRadius:"6px",fontSize:"1.1rem",fontWeight:"bold",letterSpacing:"2px",color:"#222",width:"150px",padding:"9px",marginLeft:"540px"}}>Explore now</a>
            </div>
            </div>
    </div>
  )
}

export default Home