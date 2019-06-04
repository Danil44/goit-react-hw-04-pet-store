import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const BackButton = props => {
  const { history, styles } = props;
  const handleGoBack = () => {
    history.push('/pets');
  };

  return (
    <button type="button" onClick={handleGoBack} className={styles}>
      Return
    </button>
  );
};

BackButton.propTypes = {
  history: PropTypes.shape({}).isRequired,
  styles: PropTypes.string.isRequired,
};

export default withRouter(BackButton);
