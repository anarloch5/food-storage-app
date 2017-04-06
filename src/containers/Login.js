import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, CardText, CardBlock, CardTitle } from 'reactstrap';
import LoginForm from '../components/LoginForm'
import { firebaseConnect, pathToJS } from 'react-redux-firebase'
import {connect} from "react-redux";

@firebaseConnect()
export default class Login extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        const handleSubmit = (form) => {
            this.props.firebase.login(form).then(
                response_login => console.log(response_login)
            )
        };

        return (
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-6 text-center">
                        <Card>
                            <CardHeader>
                                Log in
                            </CardHeader>
                            <CardBlock>
                                <CardTitle>
                                    Login
                                </CardTitle>
                                <CardText>
                                    to existing account
                                </CardText>
                                <div className="text-left">
                                    <LoginForm onSubmit={handleSubmit}/>
                                </div>
                            </CardBlock>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

