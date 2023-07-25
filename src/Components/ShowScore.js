import React from 'react'

function ShowScore(props) {
  return (
    <div style={{margin: '20px 70px', marginTop: '100px'}}>
        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{margin: '20px 70px', marginTop: '85px', border: '1px solid white', borderWidth: '1.5px'}}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" style={{width: `${props.loading}%`}}>{props.loading}%</div>
        </div>
        <p/>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="card" style={{width: '60%', height: '60%'}}>
                    <div className="card-body">
                        <p></p>
                        <button type="button" className="badge rounded-pill text-bg-dark" style={{fontSize: '30px', boxShadow: '0px 0px 70px 20px #a2a3a3', margin: '20px 50px', marginTop: '40px'}} onClick={props.updatemarks}>Show Score</button>
                    </div>
                    <button type="button" className="btn btn-outline-dark my-3 mx-4" onClick={props.retry}><b>RETRY ?</b></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowScore