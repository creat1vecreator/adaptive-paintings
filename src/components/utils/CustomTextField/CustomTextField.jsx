import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styled.module.scss';
import { setQValue } from '../../../store/filterSlice';

function CustomTextField({ filterState, setFilterState, theme, ...props }) {
  const qhaha = useSelector((state) => state.filter.qValue);
  const qString = useSelector((state) => state.filter.qString);

  const [qVal, setQVal] = useState('');
  const dispatch = useDispatch();
  const setNameHandler = (evt) => {
    console.log();
    setQVal(() => evt.target.value);
  };

  useEffect(() => {
    console.log('setting before', qhaha);
    dispatch(setQValue(qVal));
    console.log('setting after', qhaha);
    console.log('after', qString);
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
