import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top"  style={{borderBottom: '2px solid white'}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
            <img src="https://img.freepik.com/free-icon/question-class-note-symbol_318-59160.jpg" alt="Logo" width="35" height="35" className="d-inline-block align-text-top mx-3"/>
            Quiz-Game | Game of Quiz
            </a>
        </div>
    </nav>
  )
}

export default Navbar
