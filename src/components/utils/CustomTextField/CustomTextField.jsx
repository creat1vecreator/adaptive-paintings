import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styled.module.scss';
import { setQ } from '../../../store/filterSlice';

function CustomTextField({ filterState, setFilterState, theme, ...props }) {
  const dispatch = useDispatch();
  const nameVal = useSelector((state) => state.filter.q);
  const setNameHandler = (evt) => {
    dispatch(setQ(evt.target.value));
  };

  return (
    <input
      className={styles.search__textField}
      onChange={setNameHandler}
      value={nameVal}
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
