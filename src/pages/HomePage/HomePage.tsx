import { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import ListItem from '../../components/ListItem/ListItem';
import SearchForm from '../../components/SearchForm/SearchForm';
import { SubmitParams } from '../../components/SearchForm/SearchForm.model';
import * as api from '../../repository/api';
import { AnimeItem } from '../../repository/APImodel';
import style from './HomePage.module.scss';

const HomePage = (): JSX.Element => {
  const [items, setItems] = useState<AnimeItem[]|null>(null);
  useEffect(() => {
    api.getAnimeList()
      .then(items => {
        setItems(items);
      });
  }, []);
  const searchAnime = (filters: SubmitParams) => {
    const apiFilter = {
      title: filters.inputValue,
      options: filters.selectedOptions,
    };
    api.getAnimeList(apiFilter)
      .then(items => {
        setItems(items);
      });
  };
  return (
    <MainLayout>
      <SearchForm onSubmit={searchAnime} />
      <div className={style.listContainer}>
        {items && items.map(item => (
          <ListItem
            key={item.id}
            id={item.id}
            title={item.titles.en}
            image={item.cover_image}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default HomePage;
