import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styled.module.scss';
import { setQValue } from '../../../store/filterSlice';
import { getPaintingsByFilters } from '../../../store/paintingsSlice';

function CustomTextField({ filterState, setFilterState, theme, ...props }) {
  const qhaha = useSelector((state) => state.filter.qValue);
  const [qVal, setQVal] = useState('');
  const dispatch = useDispatch();
  const setNameHandler = (evt) => {
    setQVal(evt.target.value);
  };

  useEffect(() => {
    console.log('setting before', qhaha);
    dispatch(setQValue(qVal));
    dispatch(getPaintingsByFilters());
    console.log('setting after', qhaha);
  }, [qVal]);

  return (
    <input className={styles.search__textField} onChange={setNameHandler} value={qVal} data-theme={theme} {...props} />
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
