import React from 'react'

const MainIntro = ({ heading, description }) => {
  return (
    <div className="d-flex flex-column align-items-center text-center mb-1">
      <h1 className="p-0 mt-md-0 mt-md-0 mt-5 fw-bold display-3">{heading}</h1>
      <p className="login-description p-0">{description}</p>
    </div>
  )
}

export default MainIntro
