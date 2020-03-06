// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

// Components
import ProfileDetails from './ProfileDetails'
import ProfileAccount from './ProfileAccount'
import ProfileSocial from './ProfileSocial'
import ProfileSubscription from './ProfileSubscription'
import ProfileChoosePlan from './ProfileChoosePlan'
import ProfileSports from './ProfileSports'

const ProfileMain = ({ handlerPreviewImages }) => {
    return (
        <div className="page__profile__main">
            <Switch>
                <Route path="/dashboard/profile" exact>
                    <ProfileDetails handlerPreviewImages={handlerPreviewImages}/>
                </Route>
                <Route path="/dashboard/profile/account" exact>
                    <ProfileAccount />
                </Route>
                <Route path="/dashboard/profile/social" exact>
                    <ProfileSocial />
                </Route>
                <Route path="/dashboard/profile/subscription" exact>
                    <ProfileSubscription />
                </Route>
                <Route path="/dashboard/profile/sports" exact>
                    <ProfileSports />
                </Route>
                <Route path="/dashboard/profile/subscribe" exact>
                    <ProfileChoosePlan />
                </Route>
            </Switch>
        </div>
    )
}

ProfileMain.propTypes = {
    handlerPreviewImages: PropTypes.func.isRequired
}

export default ProfileMain