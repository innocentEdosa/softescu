import { connect } from 'react-redux';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const SimpleStateHandler = (props) => {
  const location = useLocation();
  const { i18n } = useTranslation();

  const [language, setLang] = useState(i18n.language);


  const changeLanguage = (selectedLang) => {
    i18n.changeLanguage(selectedLang);
    setLang(selectedLang);
  };

  return (props.children({
    ...props, ...location, language, changeLanguage,
  }));
};

const mapStateToProps = () => ({
});

export default connect(mapStateToProps, null)(SimpleStateHandler);
