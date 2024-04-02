import React from 'react'
import {Link} from 'react-router-dom'

function ButtonComponent(props) {
  return (
    <Link to = {props.linkurl} state={props.data}>See more...</Link>
  )
}

export default ButtonComponent