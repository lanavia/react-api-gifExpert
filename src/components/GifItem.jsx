import React from 'react'
import PropTypes from 'prop-types'
export const GifItem = ({ id, title, url }) => {
    return (
        <div className='card'>
            <p key={id}>{title}</p>
            <img src={url} />
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}