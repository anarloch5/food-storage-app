import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, CardText, CardBlock, CardTitle } from 'reactstrap';
import LoginForm from '../components/LoginForm'
import { firebaseConnect, pathToJS } from 'react-redux-firebase'
import {connect} from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'


@firebaseConnect()
@connect(
    // Map state to props
    ({ firebase }) => ({
        authError: pathToJS(firebase, 'authError'),
    })
)
export default class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            modal: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }

    openErrorModal() {
        this.setState({
            modal: true
        });
    }

    handleSubmit(form) {
        this.props.firebase.login(form).then(
            response_login => hashHistory.replace('/dashboard'), error => this.openErrorModal()
        )
        console.log(this.props.authError)
    }

    render() {

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
                                    <LoginForm onSubmit={this.handleSubmit}/>
                                </div>
                            </CardBlock>
                        </Card>
                    </div>
                </div>

                <Modal isOpen={this.state.modal} >
                    <ModalHeader toggle={this.toggleModal}>Error</ModalHeader>
                    <ModalBody className="text-center">
                        <p><strong>Error code:</strong> {this.props.authError && this.props.authError.code }</p>
                        <p>{ this.props.authError && this.props.authError.message }</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleModal}>OK</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}

