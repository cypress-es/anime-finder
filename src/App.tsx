import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ListItem from './components/ListItem/ListItem';
import mock from './mock.json';
import style from './app.module.scss';

const App = (): JSX.Element => (
  <div className={style.app}>
    <Navbar />
    <div className={style.listContainer}>
      {mock.map(item => (
        <ListItem
          key={item.id}
          title={item.titles.en}
          image={item.cover_image}
        />
      ))}
    </div>
  </div>
);

export default App;
