import React from 'react'
import { Button } from 'react-bootstrap'


const MainButton = ({type, Text, onClick , btnClassName}) => {
  return (
    <Button type={type} className={btnClassName} onClick={onClick}>
      {Text}
    </Button>
  )
}

export default MainButton
