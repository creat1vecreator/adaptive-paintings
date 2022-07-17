import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function CustomInput({ theme, ...props }) {
  return <input className={styles.search__accordionInput} data-theme={theme} {...props} />;
}
CustomInput.propTypes = {
  theme: PropTypes.string.isRequired,
  props: PropTypes.any,
};
export default CustomInput;
