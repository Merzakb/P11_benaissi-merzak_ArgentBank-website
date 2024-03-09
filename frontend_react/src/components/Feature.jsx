import React from 'react'

const Feature = ({img, alt, title, content}) => {
    return (
        <div className='feature-item'>
            <img src={img} alt={alt}  className='feature-icon'/>
            <h3 className='feature-item-title'>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Feature
