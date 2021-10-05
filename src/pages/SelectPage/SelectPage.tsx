import React from 'react';
import Select from 'react-select';
import style from './SelectPage.module.scss';
import { STATUS_OPTIONS } from './data';

// Select Page example for testing
const SelectPage: React.FC = () => (
  <div className={style.layout}>
    <Select
      name="status"
      options={STATUS_OPTIONS}
      classNamePrefix="filter-status-select"
      styles={{
        placeholder: styles => ({
          ...styles,
          textAlign: 'left',
        }),
      }}
    />
    <Select
      isMulti
      name="genres"
      options={STATUS_OPTIONS}
      classNamePrefix="filter-multi-select"
    />
  </div>      
);

export default SelectPage;

