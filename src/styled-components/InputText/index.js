import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Input = styled.input`
    background-color: #FAFBFC;
    border: 1px solid #DFE1E6;
    border-radius: 3px;
    display: block;
    width: 100%;
    padding: .5rem;
    margin-bottom: 1rem;
`

const InputText = ({ type, ...rest }) => {
    return <Input type={type} {...rest} />
}

InputText.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password']).isRequired
}

export default InputText