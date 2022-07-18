import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styled.module.scss';
import { setQValue } from '../../../store/filterSlice';
import { getPaintingsByFilters } from '../../../store/paintingsSlice';

function CustomTextField({ ...props }) {
  const qString = useSelector((state) => state.filter.qString);
  const theme = useSelector((state) => state.theme.theme);

  const [qVal, setQVal] = useState('');
  const dispatch = useDispatch();

  const setNameHandler = (evt) => {
    setQVal(() => evt.target.value);
  };

  useEffect(() => {
    dispatch(setQValue(qVal));
    dispatch(getPaintingsByFilters({ url: qString.href }));
  }, [qVal]);

  return (
    <input className={styles.search__textField} onChange={setNameHandler} value={qVal} data-theme={theme} {...props} />
  );
}

CustomTextField.propTypes = {
  props: PropTypes.any,
};
export default CustomTextField;
