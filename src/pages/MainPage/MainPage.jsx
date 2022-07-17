import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import styles from './styles.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import { GET_ALL_PAINTINGS } from '../../requests/routes';
import ImageWithInfo from '../../components/ImageWithInfo/ImageWithInfo';
import { getAllPaintings, getFilteredPaintings, getPaintingsByPage } from '../../requests/request';

function MainPage({
  paintings,
  setPaintings,
  pages,
  setPages,
  locationOptions,
  authorOptions,
}) {
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
      getAllPaintings().then((res) => setPages({ ...pages, totalPages: Math.ceil(res.data.length / 12) }));
      getPaintingsByPage(pages.currentPage).then((res) => setPaintings(res.data));
    } else {
      getFilteredPaintings(stringWithParams).then((res) => {
        setPages({ ...pages, totalPages: Math.ceil(res.data.length / 12) });
        setPaintings(res.data);
      });
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <div className={styles.mainPage__container}>

      <Header
        className="header"
      />

      <FilterGroup
        className="search"
        handleSearch={handleSearch}
        locationOptions={locationOptions}
        authorOptions={authorOptions}
      />
      <div className={styles.paintings__wrapper}>
        <>
          {
              locationOptions.length && authorOptions.length
                ? paintings.map((painting) => (
                  <ImageWithInfo
                    painting={painting}
                    location={locationOptions.filter((location) => location.value === painting.locationId)[0].label}
                    authorName={authorOptions.filter((author) => author.value === painting.authorId)[0].label}
                    key={painting.id}
                  />
                ))
                : <></>
            }
        </>

      </div>
      <Pagination
        pages={pages}
        setPages={setPages}
      />
    </div>
  );
}

MainPage.propTypes = {
  paintings: PropTypes.arrayOf(PropTypes.shape({
    authorId: PropTypes.number.isRequired,
    locationId: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  setPaintings: PropTypes.func.isRequired,
  pages: PropTypes.shape({
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
  }).isRequired,
  setPages: PropTypes.func.isRequired,
  locationOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  authorOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
export default MainPage;
