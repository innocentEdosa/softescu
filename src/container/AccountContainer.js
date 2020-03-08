import React from 'react';
import PropTypes from 'prop-types';
import Account from 'components/Account';
import RequireAuth from 'HOC/RequireAuth';
import { connect } from 'react-redux';

const AccountContainer = ({ user }) => (<Account user={user} />);

const mapStateToProps = ({ auth: { user } }) => ({
  user,
});

AccountContainer.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, null)(RequireAuth(AccountContainer));
