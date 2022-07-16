import React from 'react';
import PropTypes from 'prop-types';
import styles from './styled.module.scss';

function Info({
  hovered,
  name,
  authorName,
  created,
  location,
}) {
  return (
    <div className={styles.info__mainWrapper}>
      {
                hovered
                  ? (
                    <div className={styles.info__wrapperExtra}>
                      <div className={styles.info__name}>{name}</div>

                      <div className={styles.info__item}>
                        <span className={styles.info__subtitle}>Author:</span>
                        <span className={styles.info__subtitle}>{authorName}</span>
                      </div>

                      <div className={styles.info__item}>
                        <span className={styles.info__subtitle}>Created:</span>
                        <span className={styles.info__value}>{created}</span>
                      </div>

                      <div className={styles.info__item}>
                        <span className={styles.info__subtitle}>Location:</span>
                        <span className={styles.info__value}>{location}</span>
                      </div>

                    </div>
                  )

                  : <div className={styles.info__wrapperPlain}>{name}</div>
            }
    </div>

  );
}
Info.propTypes = {
  hovered: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
export default Info;
