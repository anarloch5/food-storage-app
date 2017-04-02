import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';


@reduxForm(
    {form: 'signup'}
)
export default class SignupForm extends Component {

    render() {

        return (
            <form onSubmit={this.props.handleSubmit}>
                <FormGroup>
                    <Field name="email" id="email" type="text" className="form-control" component="input" placeholder="Email" />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Field name="password" id="password" className="form-control" component="input" type="password" placeholder="*****" />
                </FormGroup>
                {' '}
                <Button color="primary" className="btn-block" type="submit">Submit</Button>
            </form>
        );
    }
}
