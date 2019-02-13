import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AuthActions from '~/store/ducks/auth';

const Logout = ({ signOut }) => (
  <Fragment>
    <button onClick={signOut} type="button" className="button is-info is-inverted">
      Logout
    </button>
  </Fragment>
);

Logout.propTypes = {
  signOut: PropTypes.func.isRequired,
};
// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Logout);
// mapStateToProps,
// mapDispatchToProps
