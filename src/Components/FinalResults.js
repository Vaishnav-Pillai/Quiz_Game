import React from 'react'

function FinalResults(props) {
  return (
    <div style={{margin: '20px 70px', marginTop: '100px'}}>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="card" style={{width: '60%', height: '60%'}}>
                    <div className="card-body">
                        <h1 className="card-title" style={{textAlign: 'center', fontFamily: 'fantasy', letterSpacing: '1px'}}><u>YOUR SCORE</u></h1>
                        <p></p>
                        <span className="badge rounded-pill text-bg-dark" style={{fontSize: '50px', boxShadow: '0px 0px 70px 20px #a2a3a3', margin: '20px 60px', marginTop: '45px'}}>{props.marks * 20}%</span>
                    </div>
                    <button type="button" className="btn btn-outline-dark my-3 mx-4" onClick={props.retry}><b>RETRY ?</b></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FinalResults
