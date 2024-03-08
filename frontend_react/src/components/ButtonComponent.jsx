import React from 'react'

const ButtonComponent = ({txt, className, func}) => {
  return (
    <button className={className} onClick={func}>{txt} </button>
  )
}

export default ButtonComponent
