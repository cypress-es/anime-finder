import React, { useState, useEffect } from 'react';
import { STATUS_OPTIONS, FORMAT_OPTIONS, SEASON_PERIOD } from './data';
import * as api from '../../repository/api';
import filterIcon from '../../assets/icons/filter_alt_white_24dp.svg';
import filterIconOff from '../../assets/icons/filter_alt_off_white_24dp.svg';
import { SearchFormProps, SelectOptions } from './SearchForm.model';
import { SelectValue } from '../Select/Select.model';
import Select from '../Select/Select';

import style from './SearchForm.module.scss';

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

  const changeSelect = (type: string) => (newValue: SelectValue) => {
    setSelectedOptions({
      ...selectedOptions,
      [type]: newValue,
    });
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
                onChange={changeSelect('status')}
              />
            </div>
            <div>
              <label htmlFor="searchAnime">Format</label>
              <Select
                name="format"
                options={FORMAT_OPTIONS}
                onChange={changeSelect('format')}
              />
            </div>
            <div>
              <label htmlFor="searchAnime">Format</label>
              <Select
                name="season_period"
                options={SEASON_PERIOD}
                onChange={changeSelect('season_period')}
              />
            </div>
            <div>
              <label htmlFor="searchAnime">Genre</label>
              <Select
                isMulti
                name="genres"
                options={genresOptions}
                onChange={changeSelect('genres')}
              />
            </div>
          </div>
        )}
        <div className={style.actionsContainer}>
          <input
            className="button-primary"
            data-cy="submit-button"
            type="submit"
            value="Submit"
          />
          <button
            className={`button-primary ${style.filterButton}`}
            data-cy="filter-button"
            onClick={() => toggleFilter(!showFilters)}
          >
            {!showFilters ? (
              <img data-cy="filter-on-image" src={filterIcon} alt="filter icon on" />
            ) : (
              <img data-cy="filter-off-image" src={filterIconOff} alt="filter icon off" />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

