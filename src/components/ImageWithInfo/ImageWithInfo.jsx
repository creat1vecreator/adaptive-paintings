import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styled.module.scss';
import Info from '../utils/Info/Info';
import { BASE_URL } from '../../requests/routes';

function ImageWithInfo({
  painting,
  location,
  authorName,
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={styles.imageWithInfo__wrapper}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      <img src={BASE_URL + painting.imageUrl} alt={painting.name} />
      <Info
        className="info"
        hovered={hovered}
        name={painting.name}
        authorName={authorName}
        created={painting.created}
        location={location}
      />
    </div>
  );
}
ImageWithInfo.propTypes = {
  painting: PropTypes.shape({
    name: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
};
export default ImageWithInfo;
