import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {firebaseConnect, isLoaded, isEmpty, pathToJS} from 'react-redux-firebase'
import { Card, CardImg, CardText, CardHeader, CardBlock, CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';


@firebaseConnect()
@connect(
  // Map state to props
  ({ firebase }) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth'),
    profile: pathToJS(firebase, 'profile')
  })
)
export default class Signup extends Component {

  static propTypes = {
    firebase: PropTypes.object,
    authError: PropTypes.object
  };

  handleSignup = (creds) => {
    this.setState({
      snackCanOpen: true
    })
    const { createUser, login } = this.props.firebase
    createUser(creds, { email: creds.email, username: creds.username })
      .then(() => {
        login(creds)
      })
  }

  providerLogin = (provider) => {
    this.props.firebase.login({ provider })
  };

  render () {

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 mt-5">
              <Card className="text-center">
                <CardHeader>
                  Sign up
                </CardHeader>
                <CardBlock>
                  <h4 className="card-title">
                    Start managing your food reserves
                  </h4>
                  <p className="card-title">
                    No more outdated food in your kitchen
                  </p>

                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail" hidden>Email</Label>
                      <Input type="email" name="email" id="exampleEmail" placeholder="Email"/>
                    </FormGroup>
                    {' '}
                    <FormGroup>
                      <Label for="examplePassword" hidden>Password</Label>
                      <Input type="password" name="password" id="examplePassword" placeholder="Password"/>
                    </FormGroup>
                    {' '}
                    <Button color="primary">Create account</Button>{' '}
                  </Form>

                </CardBlock>
              </Card>
          </div>
        </div>
      </div>
    )
  }
}
