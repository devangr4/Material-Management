import {FaPlus} from 'react-icons/fa'
import React from 'react'

const Button = ({color, text}) => {
  return <button style={{backgroundColor: color}} className="btn"><FaPlus/>  {text}</button>
}

export default Button
