import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from "react-router";
import {connect} from "react-redux";
import { firebaseConnect, pathToJS, isEmpty} from 'react-redux-firebase'
import { hashHistory } from 'react-router'

@firebaseConnect()
@connect(
    ({ firebase }) => ({
        profile: pathToJS(firebase, 'profile'),
    })
)
export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout () {
        this.props.firebase.logout().then( () => {
            hashHistory.replace('/')
        });
    }

    render() {
        const isAuthenticated = !isEmpty(this.props.profile);
        const {displayName} = this.props.profile;

        return (
            <div>
                <Navbar color="faded" light toggleable>
                    <NavbarToggler right onClick={this.toggle} />
                    <NavbarBrand tag={Link} to="/"><strong>Food storage</strong></NavbarBrand>
                    <NavbarBrand>
                        <small className="pl-5 text-muted">Welcome, {displayName}!</small>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {!isAuthenticated &&
                            <NavItem>
                                <NavLink tag={Link} to="/signup">Sign up</NavLink>
                            </NavItem>
                            }
                            {!isAuthenticated &&
                            <NavItem>
                                <NavLink tag={Link} to="/login">Login</NavLink>
                            </NavItem>
                            }
                            {isAuthenticated &&
                                <NavItem>
                                <NavLink tag={Link} to="/dashboard">My store</NavLink>
                                </NavItem>
                            }
                            {isAuthenticated &&
                            <NavItem>
                                <NavLink style={{'cursor': 'pointer'}} onClick={this.logout}>Logout</NavLink>
                            </NavItem>
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
