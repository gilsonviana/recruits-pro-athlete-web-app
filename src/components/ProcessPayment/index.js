import React from "react";
import { Redirect } from 'react-router-dom'

const ProcessPayment = () => {
    console.log("query ===>", window.location.search)
    // TODO on component did mount, call service to save payment information and update user account as a subscriber
    return (
        <Redirect to="/dashboard" />
    )
}

export default ProcessPayment