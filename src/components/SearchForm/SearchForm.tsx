import React, { useState, useEffect } from 'react';
import Select, { SingleValue, MultiValue } from 'react-select';
import { STATUS_OPTIONS, FORMAT_OPTIONS, SEASON_PERIOD } from './data';
import * as api from '../../repository/api';
import { SearchFormProps, SelectOptions } from './SearchForm.model';
import style from './SearchForm.module.scss';

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [inputValue, setValue] = useState('');
  const [genresOptions, setOptions] = useState<SelectOptions[]>([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  useEffect(() => {
    api.getGenres()
      .then(genres => {
        const options: SelectOptions[] = genres.map(genre => ({
          value: genre, label: genre
        }));
        setOptions(options);
      });
  }, []);
  const changeSelect = (type: string) => (newValue: SingleValue<SelectOptions>) => {
    if (newValue) {
      setSelectedOptions({
        ...selectedOptions,
        [type]: newValue.value,
      });
    }
  }
  const changeMultipleSelect = (type: string) => (newValues: MultiValue<SelectOptions>) => {
    if (newValues) {
      const values = newValues.map(({ value }: SelectOptions) => value);
      setSelectedOptions({
        ...selectedOptions,
        [type]: values,
      });
    }
  };
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
        <label htmlFor="searchAnime">Status</label>
        <Select
          name="status"
          options={STATUS_OPTIONS}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={changeSelect('status')}
        />
        <label htmlFor="searchAnime">Format</label>
        <Select
          name="format"
          options={FORMAT_OPTIONS}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={changeSelect('format')}
        />
        <label htmlFor="searchAnime">Format</label>
        <Select
          name="season_period"
          options={SEASON_PERIOD}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={changeSelect('season_period')}
        />
        <label htmlFor="searchAnime">Genre</label>
        <Select
          isMulti
          name="genres"
          options={genresOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={changeMultipleSelect('genres')}
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

