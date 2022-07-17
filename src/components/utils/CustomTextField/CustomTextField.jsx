import React from 'react';
import PropTypes from 'prop-types';
import styles from './styled.module.scss';

function CustomTextField({
  filterState,
  setFilterState,
  theme,
  ...props
}) {
  const setNameHandler = (evt) => {
    setFilterState({ ...filterState, nameValue: evt.target.value });
  };

  return (
    <input
      className={styles.search__textField}
      onChange={setNameHandler}
      value={filterState.nameValue}
      data-theme={theme}
      {...props}
    />
  );
}

CustomTextField.propTypes = {
  filterState: PropTypes.shape({
    nameValue: PropTypes.string.isRequired,
  }).isRequired,
  theme: PropTypes.string.isRequired,
  setFilterState: PropTypes.func.isRequired,
  props: PropTypes.any,
};
export default CustomTextField;
