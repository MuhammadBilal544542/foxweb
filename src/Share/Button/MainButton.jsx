import React from 'react'


const MainButton = ({ name, onClick , btnClassName}) => {
  return (
    <button className={btnClassName} style={{ height: "60px" }} onClick={onClick}>
      {name}
    </button>
  )
}

export default MainButton
