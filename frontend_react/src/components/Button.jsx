import React from 'react'

const Button = ({txt, className, func}) => {
  return (
    <button className={className} onClick={func}>{txt} </button>
  )
}

export default Button
