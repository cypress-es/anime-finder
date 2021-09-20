import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ListItem from './components/ListItem/ListItem';
import SearchForm from './components/SearchForm/SearchForm';
import * as api from './repository/api';
import { AnimeItem } from './repository/APImodel';
import style from './app.module.scss';

const App = (): JSX.Element => {
  const [items, setItems] = useState<AnimeItem[]|null>(null);
  useEffect(() => {
    api.getAnimeList()
      .then(items => {
        setItems(items);
      });
  }, []);
  return (
    <div className={style.app}>
      <Navbar />
      <SearchForm />
      <div className={style.listContainer}>
        {items && items.map(item => (
          <ListItem
            key={item.id}
            title={item.titles.en}
            image={item.cover_image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
