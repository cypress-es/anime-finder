import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { STATUS_OPTIONS, FORMAT_OPTIONS, SEASON_PERIOD } from './data';
import { SearchFormProps, SelectOptions } from './SearchForm.model';
import style from './SearchForm.module.scss';

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [inputValue, setValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({});
  const changeSelect = (type: string) => (newValue: SingleValue<SelectOptions>) => {
    if (newValue) {
      setSelectedOptions({
        ...selectedOptions,
        [type]: newValue.value,
      });
    }
  }
  return (
    <form
      data-cy="search-form"
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        onSubmit({
          inputValue,
          selectedOptions,
        });
      }}
    >
      <div className={style.container}>
        <label htmlFor="searchAnime">Search yor anime</label>
        <input
          className="u-full-width"
          data-cy="search-form-input"
          type="text"
          id="searchAnime"
          value={inputValue}
          onChange={(e: React.FormEvent<HTMLInputElement>): void => {
            setValue(e.currentTarget.value)
          }}
        />
        <Select
          name="status"
          options={STATUS_OPTIONS}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={changeSelect('status')}
        />
        <Select
          name="format"
          options={FORMAT_OPTIONS}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <Select
          name="period"
          options={SEASON_PERIOD}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <Select
          name="period"
          options={SEASON_PERIOD}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <input
          className="button-primary"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  );
};

export default SearchForm;

