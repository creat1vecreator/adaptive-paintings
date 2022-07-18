import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styled.module.scss';
import { setQValue } from '../../../store/filterSlice';
import { getPaintingsByFilters } from '../../../store/paintingsSlice';

function CustomTextField({ filterState, setFilterState, theme, ...props }) {
  const qString = useSelector((state) => state.filter.qString);
  const paintings = useSelector((state) => state.paintings.paintings);

  const [qVal, setQVal] = useState('');
  const dispatch = useDispatch();
  const setNameHandler = (evt) => {
    console.log('вызван set name');
    setQVal(() => evt.target.value);
  };

  useEffect(() => {
    dispatch(setQValue(qVal));
    console.log('after qstring', qString.href);
    dispatch(getPaintingsByFilters({ url: qString.href }));
    console.log('new paintings', paintings);
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
