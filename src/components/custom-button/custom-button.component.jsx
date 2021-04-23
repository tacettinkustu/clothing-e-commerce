import React from 'react'
import "./custom-button-styles.scss"

const CustomBotton = ({children,...otherProps}) => {
    return (
        <button className="custom-button" {...otherProps}>
        {children}
        </button>
    )
}

export default CustomBotton
