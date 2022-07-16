import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ControlledAccordions from '../utils/CustomAccorion/CustomAccordion';
import CustomSelect from '../utils/CustomSelect/CustomSelect';
import CustomTextField from '../utils/CustomTextField/CustomTextField';
import style from './styled.module.scss';

function FilterGroup({
  handleSearch,
  theme,
  locationOptions,
  authorOptions,

}) {
  const [filterState, setFilterState] = useState(
    {
      nameValue: '',
      authorName: '',
      location: '',
      from: '',
      before: '',

    },
  );
  useEffect(() => {
    const authorNameValue = filterState.authorName?.value || '';
    const locationValue = filterState.location?.value || '';
    handleSearch(
      filterState.nameValue,
      authorNameValue,
      locationValue,
      filterState.from,
      filterState.before,
    );
  }, [filterState]);

  return (
    <div className={style.search__wrapper}>
      <CustomTextField
        filterState={filterState}
        setFilterState={setFilterState}
        placeholder="Name"
        name="name"
        theme={theme}
      />

      <CustomSelect
        defulatValue={filterState.authorName}
        onChange={(opt) => setFilterState({ ...filterState, authorName: opt })}
        name="author"
        options={authorOptions}
        placeholder="Author"
        isClearable
        theme={theme}
      />
      <CustomSelect
        defulatValue={filterState.location}
        onChange={(opt) => setFilterState({ ...filterState, location: opt })}
        className="search__input search__input-location"
        options={locationOptions}
        placeholder="Location"
        isClearable
        theme={theme}
      />

      <ControlledAccordions
        className="search__accordion"
        theme={theme}
        filterState={filterState}
        setFilterState={setFilterState}
      />
    </div>
  );
}
FilterGroup.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  locationOptions: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  authorOptions: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
export default FilterGroup;
