import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styled.module.scss';
import CustomInput from '../CustomInput/CustomInput';
import { setCreatedGte, setCreatedLte } from '../../../store/filterSlice';
import { getPaintingsByFilters } from '../../../store/paintingsSlice';

function ControlledAccordions({ theme }) {
  const qString = useSelector((state) => state.filter.qString);
  const [fromVal, setFromVal] = useState('');
  const [beforeVal, setBeforeVal] = useState('');
  const dispatch = useDispatch();

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const inputFromHandler = (evt) => {
    setFromVal(evt.target.value);
  };
  const inputBeforeHandler = (evt) => {
    setBeforeVal(evt.target.value);
  };
  useEffect(() => {
    dispatch(setCreatedGte(fromVal));
    dispatch(getPaintingsByFilters({ url: qString.href }));
  }, [fromVal]);

  useEffect(() => {
    dispatch(setCreatedLte(beforeVal));
    dispatch(getPaintingsByFilters({ url: qString.href }));
  }, [beforeVal]);

  return (
    <div className={styles.search__accordion} data-theme={theme}>
      <Accordion className={styles.MuiAccordionRoot} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          className={styles.MuiAccordionSummaryRoot}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Created</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.MuiAccordionDetailsRoot}>
          <CustomInput name="from" placeholder="from" value={fromVal} onChange={inputFromHandler} theme={theme} />
          -
          <CustomInput
            name="before"
            placeholder="before"
            value={beforeVal}
            onChange={inputBeforeHandler}
            theme={theme}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

ControlledAccordions.propTypes = {
  theme: PropTypes.string.isRequired,
};
export default ControlledAccordions;
