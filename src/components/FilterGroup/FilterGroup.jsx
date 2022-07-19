import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ControlledAccordions from '../utils/CustomAccorion/CustomAccordion';
import CustomSelect from '../utils/CustomSelect/CustomSelect';
import CustomTextField from '../utils/CustomTextField/CustomTextField';
import style from './styled.module.scss';
import { setAuthorId, setLocationId } from '../../store/filterSlice';
import { getPaintingsByFilters } from '../../store/paintingsSlice';

function FilterGroup({ locationOptions, authorOptions }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const [filterState, setFilterState] = useState({
    authorName: '',
    location: '',
  });
  useEffect(() => {
    const authorNameValue = filterState.authorName?.value || '';
    dispatch(setAuthorId(authorNameValue));
    dispatch(getPaintingsByFilters());
  }, [filterState.authorName]);

  useEffect(() => {
    const locationValue = filterState.location?.value || '';
    dispatch(setLocationId(locationValue));
    dispatch(getPaintingsByFilters());
  }, [filterState.location]);

  return (
    <div className={style.search__wrapper}>
      <CustomTextField placeholder="Name" name="name" theme={theme} />
      <CustomSelect
        defulatValue=""
        onChange={(opt) => setFilterState({ ...filterState, authorName: opt })}
        name="author"
        options={authorOptions}
        placeholder="Author"
        isClearable
        theme={theme}
      />
      <CustomSelect
        defulatValue=""
        onChange={(opt) => setFilterState({ ...filterState, location: opt })}
        className="search__input search__input-location"
        options={locationOptions}
        placeholder="Location"
        isClearable
        theme={theme}
      />

      <ControlledAccordions className="search__accordion" theme={theme} />
    </div>
  );
}

FilterGroup.propTypes = {
  locationOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  authorOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default FilterGroup;
