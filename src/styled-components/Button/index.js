import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button =  styled.button`
    background-color: #00EC00;
    color: #eee;
    font-weight: bold;
    border-radius: 3px;
    display: block;
    width: 100%;
    padding: .5rem;
    margin-bottom: 1rem;
    border: none;
    cursor: ${({disabled}) => disabled ? `not-allowed` : 'pointer'};
    &:hover {
        background-color: #00fc00;
    }
`
export default ({children, ...rest}) => {
    return (
        <Button
            {...rest}
        >
            {children}
        </Button>
    )
}

Button.propTypes = {
    disabled: PropTypes.bool
}