import React, { useState, useEffect } from 'react';
import Select, { SingleValue, MultiValue } from 'react-select';
import { STATUS_OPTIONS, FORMAT_OPTIONS, SEASON_PERIOD } from './data';
import * as api from '../../repository/api';
import filterIcon from '../../assets/icons/filter_alt_white_24dp.svg';
import filterIconOff from '../../assets/icons/filter_alt_off_white_24dp.svg';
import { SearchFormProps, SelectOptions } from './SearchForm.model';
import style from './SearchForm.module.scss';

// TODO: refactor in multiple components
const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [inputValue, setValue] = useState('');
  const [showFilters, toggleFilter] = useState<boolean>(false);
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
        <div>
          <label htmlFor="searchAnime">Search yor anime</label>
          <input
            className={`u-full-width ${style.titleInput}`}
            data-cy="search-form-input"
            type="text"
            id="searchAnime"
            placeholder="search your favorite anime"
            value={inputValue}
            onChange={(e: React.FormEvent<HTMLInputElement>): void => {
              setValue(e.currentTarget.value)
            }}
          />
        </div>
        {showFilters && (
          <div className={style.filterContainer}>
            <div>
              <label htmlFor="searchAnime">Status</label>
              <Select
                name="status"
                options={STATUS_OPTIONS}
                className="basic-multi-select"
                classNamePrefix="select"
                styles={{
                  placeholder: styles => ({
                    ...styles,
                    textAlign: 'left',
                  }),
                }}
                onChange={changeSelect('status')}
              />
            </div>
            <div>
              <label htmlFor="searchAnime">Format</label>
              <Select
                name="format"
                options={FORMAT_OPTIONS}
                className="basic-multi-select"
                classNamePrefix="select"
                styles={{
                  placeholder: styles => ({
                    ...styles,
                    textAlign: 'left',
                  }),
                }}
                onChange={changeSelect('format')}
              />
            </div>
            <div>
              <label htmlFor="searchAnime">Format</label>
              <Select
                name="season_period"
                options={SEASON_PERIOD}
                className="basic-multi-select"
                classNamePrefix="select"
                styles={{
                  placeholder: styles => ({
                    ...styles,
                    textAlign: 'left',
                  }),
                }}
                onChange={changeSelect('season_period')}
              />
            </div>
            <div>
              <label htmlFor="searchAnime">Genre</label>
              <Select
                isMulti
                name="genres"
                options={genresOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={changeMultipleSelect('genres')}
              />
            </div>
          </div>
        )}
        <div className={style.actionsContainer}>
          <input
            className="button-primary"
            type="submit"
            value="Submit"
          />
          <button
            className={`button-primary ${style.filterButton}`}
            onClick={() => toggleFilter(!showFilters)}
          >
            {!showFilters && (
              <img src={filterIcon} alt="filter icon on" />
            )}
            {showFilters && (
              <img src={filterIconOff} alt="filter icon off" />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

