import { connect } from 'react-redux';
import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { logOut } from 'store/actions/authActions';

const SimpleStateHandler = (props) => {
  const location = useLocation();
  const { push, goBack } = useHistory();
  const { i18n } = useTranslation();

  const [language, setLang] = useState(i18n.language);


  const changeLanguage = (selectedLang) => {
    i18n.changeLanguage(selectedLang);
    setLang(selectedLang);
  };

  const logOutUser = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    const { logoutUser } = props;
    logoutUser();
    return push('/home');
  };

  return (props.children({
    ...props, ...location, language, changeLanguage, logOutUser, goBack,
  }));
};

const mapStateToProps = ({ auth: { isAuthenticated, user: { username = '', isStaff = false } = {} } }) => ({
  isAuthenticated,
  username,
  isStaff,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleStateHandler);
