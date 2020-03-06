import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'

const Button =  styled.button`
    background-color: ${({link}) => link ? 'none' : '#00EC00'};
    color: #fff;
    font-weight: bold;
    border-radius: 3px;
    display: block;
    width: 100%;
    padding: .5rem;
    margin-bottom: 1rem;
    border: none;
    cursor: ${({disabled}) => disabled ? `not-allowed` : 'pointer'};
    &:hover {
        background-color: ${({link}) => link ? 'none' : '#00EC00'};
    }
`
export default ({children, loading, ...rest}) => {
    return (
        <Button
            {...rest}
        >
            {children}
            {loading && <Loader style={{float: 'right', marginRight: '1rem'}} type="Oval" width={18} height={18} color="#eee"/>}
        </Button>
    )
}

Button.propTypes = {
    disabled: PropTypes.bool,
    link: PropTypes.bool,
    loading: PropTypes.bool
}