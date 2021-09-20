import React, { useState } from 'react';
import style from './SearchForm.module.scss';

interface SearchFormProps {
  onSubmit: (inputValue: string) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [inputValue, setValue] = useState('');
  return (
    <form
      data-cy="search-form"
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        onSubmit(inputValue);
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

