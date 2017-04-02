import React, { Component, PropTypes } from 'react';
import Header from '../components/Header'

export default class AppContainer extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

