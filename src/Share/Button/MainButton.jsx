import React from 'react'
import { Button } from 'react-bootstrap'


const MainButton = ({type, Text, onClick , btnClassName , disabled}) => {
  return (
    <Button disabled={disabled} type={type} className={`${btnClassName} activeBtn`} onClick={onClick}>
      {Text}
    </Button>
  )
}

export default MainButton
