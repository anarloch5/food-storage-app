import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, CardText, CardBlock, CardTitle } from 'reactstrap';
import SignupForm from '../components/SignupForm'
import { firebaseConnect, pathToJS } from 'react-redux-firebase'
import {connect} from "react-redux";
import {hashHistory } from 'react-router'

@firebaseConnect()
@connect(
    // Map state to props
    ({ firebase }) => ({
        authError: pathToJS(firebase, 'authError'),
        auth: pathToJS(firebase, 'auth'),
        profile: pathToJS(firebase, 'profile')
    })
)
export default class Signup extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (form) {
        this.props.firebase.createUser(form).then(() => {
            this.props.firebase.login(form).then( uid => {
                this.props.firebase.update('/users/' + uid, {displayName: form.displayName});
            })
        })
    };

    render() {
        return (
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-6 text-center">
                        <Card>
                            <CardHeader>
                                Create free account
                            </CardHeader>
                            <CardBlock>
                                <CardTitle>
                                    Sign up
                                </CardTitle>
                                <CardText>
                                    No more outdated food in your kitchen
                                </CardText>
                                    <div className="text-left">
                                        <SignupForm onSubmit={this.handleSubmit}/>
                                    </div>
                            </CardBlock>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

