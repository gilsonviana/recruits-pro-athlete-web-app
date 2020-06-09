import * as React from 'react'
import { FaBell } from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown'

const Notification = () => {
    return (
        <div className="app__header__top__bar__item-bell">
            <Dropdown className="dropdown d-flex text-light">
                <Dropdown.Toggle
                    className="btn-account d-none d-md-flex"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <span className="fabell">
                        <FaBell />
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu
                    x-placement="bottom-start"
                    style={{
                        position: `absolute`,
                        top: `56px`,
                        left: `0px`,
                        willChange: `top, left`,
                    }}
                >
                    <Link to={`/dashboard/profile`} className="dropdown-item" as={<Dropdown.Item />}>
                        <FiSettings className="dropdown-icon oi oi-person" /> Settings
                                    </Link>
                    <Dropdown.Item onClick={doLogout}>
                        <FiLogOut className="dropdown-icon oi oi-account-logout" /> Logout
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Notification