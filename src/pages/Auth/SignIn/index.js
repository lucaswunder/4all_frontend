import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

// import Button from '~/styles/components/Button';
import { Container } from '../styles';

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    cpf: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { password, cpf } = this.state;
    const { signInRequest } = this.props;

    signInRequest(cpf, password);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { cpf, password } = this.state;

    return (
      <Container>
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-grey">Ekky</h3>
                <p className="subtitle has-text-grey">Please login to proceed.</p>
                <div className="box">
                  <form onSubmit={this.handleSubmit}>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-medium"
                          type="text"
                          placeholder="Your CPF"
                          name="cpf"
                          value={cpf}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-medium"
                          placeholder="Your Password"
                          type="password"
                          name="password"
                          value={password}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="button is-block is-info is-medium is-fullwidth"
                    >
                      Login
                    </button>
                  </form>
                </div>
                <p className="has-text-grey">
                  <a href="../">Open Your Account</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
