import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, CardText, CardBlock, CardTitle } from 'reactstrap';
import SignupForm from '../components/SignupForm'
import { firebaseConnect, pathToJS } from 'react-redux-firebase'
import {connect} from "react-redux";

@firebaseConnect()
export default class Signup extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        const handleSubmit = (form) => {
            this.props.firebase.createUser(form).then( (response) => {
                console.log(response)
            })
        };

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
                                        <SignupForm onSubmit={handleSubmit}/>
                                    </div>
                            </CardBlock>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

