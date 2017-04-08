import React, { Component, PropTypes } from 'react';
import Header from '../components/Header'
import {connect} from "react-redux";
import { firebaseConnect, pathToJS } from 'react-redux-firebase'

export default class AppContainer extends Component {

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

