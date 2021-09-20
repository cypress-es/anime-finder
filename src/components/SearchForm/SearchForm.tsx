import React from 'react';
import style from './SearchForm.module.scss';

const SearchForm: React.FC = () => (
  <form>
    <div className={style.container}>
      <label htmlFor="searchAnime">Search yor anime</label>
      <input
        className="u-full-width"
        type="text"
        id="searchAnime"
      />
      <input
        className="button-primary"
        type="submit"
        value="Submit"
      />
    </div>
  </form>
);

export default SearchForm;

