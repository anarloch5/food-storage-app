import { hashHistory } from 'react-router'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { pathToJS } from 'react-redux-firebase'
import Loading from '../components/Loading'

export const UserIsAuthenticated = UserAuthWrapper({
    wrapperDisplayName: 'UserIsAuthenticated',
    authSelector: ({ firebase }) => pathToJS(firebase, 'auth'),
    // authenticatingSelector: ({ firebase }) => pathToJS(firebase, 'isInitializing') === true,
    predicate: auth => auth !== null,
    // LoadingComponent: Loading,
    redirectAction: (newLoc) => (dispatch) => {
        hashHistory.replace(newLoc)
        // routerActions.replace // if using react-router-redux
        dispatch({
            type: 'UNAUTHED_REDIRECT',
            payload: { message: 'You must be authenticated.' },
        })
    },
});


export const UserIsNotAuthenticated = UserAuthWrapper({
    wrapperDisplayName: 'UserIsNotAuthenticated',
    allowRedirectBack: false,
    failureRedirectPath: '/dashboard',
    // LoadingComponent: Loading,
    authSelector: ({ firebase }) => pathToJS(firebase, 'auth'),
    // authenticatingSelector: ({ firebase }) => pathToJS(firebase, 'isInitializing') !== true,
    predicate: auth => auth === null,
    redirectAction: (newLoc) => (dispatch) => {
        hashHistory.replace(newLoc)
        dispatch({
            type: 'AUTHED_REDIRECT',
            payload: { message: 'User is authenticated. Redirecting home...' }
        })
    }
});