import React from 'react';
import style from './ListItem.module.scss';

interface ListItemProps {
  title: string
  image: string
}

const ListItem: React.FC<ListItemProps> = ({ title, image }) => (
  <div className={style.container} data-cy="list-item">
    <img className={style.img} src={image} alt={title} />
    <h3 className={style.title}>{title}</h3>
  </div>
);

export default ListItem;
