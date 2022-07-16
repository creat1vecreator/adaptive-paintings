import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './styled.module.scss';
import CustomInput from '../CustomInput/CustomInput';

function ControlledAccordions({
  filterState,
  setFilterState,
  theme,

}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const inputSearchChange = (evt) => {
    setFilterState({ ...filterState, [evt.target.name]: evt.target.value });
  };
  return (
    <div className={styles.search__accordion} data-theme={theme}>
      <Accordion
        className={styles.MuiAccordionRoot}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          className={styles.MuiAccordionSummaryRoot}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Created
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.MuiAccordionDetailsRoot}>

          <CustomInput
            name="from"
            placeholder="from"
            value={filterState.from}
            onChange={inputSearchChange}
            theme={theme}
          />
          -
          <CustomInput
            name="before"
            placeholder="before"
            value={filterState.before}
            onChange={inputSearchChange}
            theme={theme}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

ControlledAccordions.propTypes = {
  filterState: PropTypes.shape({
    from: PropTypes.string,
    before: PropTypes.string,
  }).isRequired,
  setFilterState: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};
export default ControlledAccordions;
