import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import styles from './styles.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import { GET_ALL_PAINTINGS } from '../../requests/routes';
import ImageWithInfo from '../../components/ImageWithInfo/ImageWithInfo';
import { getAllPaintings, getFilteredPaintings, getPaintingsByPage } from '../../requests/request';
import { fetchLocationsAndAuthors } from '../../store/optionsSlice';
import { setCurrentPage, setTotalPages } from '../../store/peagesSlice';

function MainPage({ paintings, setPaintings }) {
  const dispatch = useDispatch();
  const locationOptions = useSelector((state) => state.options.locationOptions);
  const authorOptions = useSelector((state) => state.options.authorOptions);
  const currentPage = useSelector((state) => state.pages.currentPage);
  const handleSearch = (namePainting, authorId, locationId, from, before) => {
    const stringWithParams = new URL(GET_ALL_PAINTINGS);
    if (namePainting) {
      stringWithParams.searchParams.append('q', namePainting);
    }
    if (authorId) {
      stringWithParams.searchParams.append('authorId', authorId);
    }
    if (locationId) {
      stringWithParams.searchParams.append('locationId', locationId);
    }
    if (from) {
      stringWithParams.searchParams.append('created_gte', from);
    }
    if (before) {
      stringWithParams.searchParams.append('created_lte', before);
    }
    if (!namePainting && !authorId && !locationId && !from && !before) {
      getAllPaintings().then((res) => dispatch(setTotalPages(Math.ceil(res.data.length / 12))));
      getPaintingsByPage(currentPage).then((res) => setPaintings(res.data));
    } else {
      getFilteredPaintings(stringWithParams).then((res) => {
        dispatch(setTotalPages(Math.ceil(res.data.length / 12)));
        dispatch(setCurrentPage(1));
        setPaintings(res.data);
      });
    }
  };
  useEffect(() => {
    // dispatch(fetchLocations());
    // dispatch(fetchAuthors());
    dispatch(fetchLocationsAndAuthors());
  }, []);

  return (
    <div className={styles.mainPage__container}>
      <Header className="header" />

      <FilterGroup
        className="search"
        handleSearch={handleSearch}
        locationOptions={locationOptions}
        authorOptions={authorOptions}
      />
      <div className={styles.paintings__wrapper}>
        <>
          {locationOptions.length && authorOptions.length ? (
            paintings.map((painting) => (
              <ImageWithInfo
                painting={painting}
                location={locationOptions.filter((location) => location.value === painting.locationId)[0].label}
                authorName={authorOptions.filter((author) => author.value === painting.authorId)[0].label}
                key={painting.id}
              />
            ))
          ) : (
            <></>
          )}
        </>
      </div>
      <Pagination />
    </div>
  );
}

MainPage.propTypes = {
  paintings: PropTypes.arrayOf(
    PropTypes.shape({
      authorId: PropTypes.number.isRequired,
      locationId: PropTypes.number.isRequired,
      created: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  setPaintings: PropTypes.func.isRequired,
};
export default MainPage;
