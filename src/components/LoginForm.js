import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import renderField from '../forms/renderField'

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
};


@reduxForm(
    {form: 'signup', validate}
)
export default class SignupForm extends Component {

    render() {

        return (
            <form onSubmit={this.props.handleSubmit}>

                <Field name="email" id="email" type="text" placeholder="Email" component={renderField} />
                {' '}
                <Field name="password" id="password" type="password" placeholder="*****" component={renderField} />
                {' '}
                <Button color="primary" className="btn-block" type="submit">Submit</Button>
            </form>
        );
    }
}
