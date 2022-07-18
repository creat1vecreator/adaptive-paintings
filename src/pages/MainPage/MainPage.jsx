import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import styles from './styles.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import ImageWithInfo from '../../components/ImageWithInfo/ImageWithInfo';
import { fetchLocationsAndAuthors } from '../../store/optionsSlice';

function MainPage() {
  const dispatch = useDispatch();
  const paintings = useSelector((state) => state.paintings.paintings);
  const locationOptions = useSelector((state) => state.options.locationOptions);
  const authorOptions = useSelector((state) => state.options.authorOptions);

  useEffect(() => {
    dispatch(fetchLocationsAndAuthors());
  }, []);

  return (
    <div className={styles.mainPage__container}>
      <Header className="header" />
      <FilterGroup className="search" locationOptions={locationOptions} authorOptions={authorOptions} />
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

export default MainPage;
