import React from 'react'

import Container from 'react-bootstrap/Container'

const LandingPageFooter = () => {
    return (
        <footer className="page__landing__footer mt-4">
            <Container className="border-top">
                <div className="page__landing__footer__content">
                    <p className="text-dark-50 text-center my-4">
                        &copy; 2020 All rights reserved by <b>Recruits Pro</b>
                    </p>
                </div>
            </Container>
        </footer>
    )
}

export default LandingPageFooter
