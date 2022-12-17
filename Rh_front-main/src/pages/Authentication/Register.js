import PropTypes from "prop-types"
import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// action
import { registerUser, apiError, registerUserFailed } from "../../store/actions"

// Redux
import { connect } from "react-redux"
import { Link } from "react-router-dom"

// import images
import logoSm from "../../assets/images/logo-sm-dark.png";

const Register = props => {
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    console.log("register values",values)
    props.registerUser(values)
  }

  useEffect(() => {
    props.apiError("")
  }, []);

  return (
    <React.Fragment>
      <MetaTags>
        <title>Register | Assist RH</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">Register</h5>
                    <p className="text-white-50">Get your Assist RH account now.</p>
                    <a href="index.html" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" className="img-log" />
                    </a>
                  </div>
                </div>
                <CardBody className="p-4">
                  <div className="p-3">
                    <AvForm
                      className="mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.user && props.user ? (
                        <Alert color="success">
                          Register User Successfully
                        </Alert>
                      ) : null}

                      {props.registrationError &&
                        props.registrationError ? (
                          <Alert color="danger">
                            {props.registrationError}
                          </Alert>
                        ) : null}

                      <div className="mb-3">
                        <AvField
                          id="email"
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="username"
                          label="Username"
                          type="text"
                          required
                          placeholder="Enter username"
                        />
                      </div>
                      
                      <div className="mb-3">
                        <AvField
                          name="age"
                          label="Age"
                          type="text"
                          required
                          placeholder="Enter age"
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="plainPassword"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="mb-3 row">
                        <div className="col-12 text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                      </div>

                      
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?{" "}
                  <Link to="/login" className="fw-medium text-primary">
                    {" "}
                    Login
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Assist RH project. All Rights Reserved.{" "}
                 
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Register.propTypes = {
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.func,
  registrationError: PropTypes.any,
  user: PropTypes.any,
}

const mapStatetoProps = state => {
  const { user, registrationError, loading } = state.Account
  return { user, registrationError, loading }
}

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(Register)
