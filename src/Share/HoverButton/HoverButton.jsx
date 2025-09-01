import React from 'react'
import { Link } from 'react-router-dom'


const HoverButton = (props) => {
  return (
    <button className={`main-btn rounded-5 w-100 ${props.className}`} style={{ height: "60px" }} onClick={props.onClick}>
      {props.text}
      {props.To && <Link className={props.LinkClass} to={props.To}>{props.Linktext}</Link>}
    </button>
  )
}

export default HoverButton
