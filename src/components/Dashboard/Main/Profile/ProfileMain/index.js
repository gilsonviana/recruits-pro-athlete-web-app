// Dependencies
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import ProfileDetails from './ProfileDetails'
import ProfileAccount from './ProfileAccount'
import ProfileSocial from './ProfileSocial'
import ProfileSubscription from './ProfileSubscription'

const ProfileMain = () => {
    return (
        <div className="page__profile__main">
            <Switch>
                <Route path="/dashboard/profile" exact>
                    <ProfileDetails />
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
            </Switch>
        </div>
    )
}

export default ProfileMain