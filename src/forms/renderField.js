import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const renderField = ({ input, placeholder, type, meta: { touched, error, warning } }) => (
    <FormGroup className={(touched && error ? 'has-danger' : '')}>
        <input className="form-control" {...input} placeholder={placeholder} type={type}/>

    </FormGroup>
);

export default renderField