import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ControlledAccordions from '../utils/CustomAccorion/CustomAccordion';
import CustomSelect from '../utils/CustomSelect/CustomSelect';
import CustomTextField from '../utils/CustomTextField/CustomTextField';
import style from './styled.module.scss';

function FilterGroup({ locationOptions, authorOptions }) {
  const theme = useSelector((state) => state.theme.theme);
  // const [filterState, setFilterState] = useState({
  //   nameValue: '',
  //   authorName: '',
  //   location: '',
  //   from: '',
  //   before: '',
  // });
  // useEffect(() => {
  //   const authorNameValue = filterState.authorName?.value || '';
  //   const locationValue = filterState.location?.value || '';
  //   handleSearch(filterState.nameValue, authorNameValue, locationValue, filterState.from, filterState.before);
  // }, [filterState]);

  return (
    <div className={style.search__wrapper}>
      <CustomTextField placeholder="Name" name="name" theme={theme} />
      <CustomSelect
        defulatValue=""
        // onChange={(opt) => setFilterState({ ...filterState, authorName: opt })}
        name="author"
        options={authorOptions}
        placeholder="Author"
        isClearable
        theme={theme}
      />
      <CustomSelect
        defulatValue=""
        // onChange={(opt) => setFilterState({ ...filterState, location: opt })}
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
