import React from 'react'
import {Link} from 'react-router-dom'

function ButtonComponent(props) {
  return (
    <Link to = {props.linkurl} state={props.data}>Click to see complete user data...</Link>
  )
}

export default ButtonComponent