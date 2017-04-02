import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, CardText, CardBlock, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Signup extends Component {
    render() {
        return (
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-8 text-center">
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
                            </CardBlock>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

