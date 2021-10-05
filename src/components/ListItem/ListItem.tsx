import React from 'react';
import { Link } from 'react-router-dom';
import style from './ListItem.module.scss';

interface ListItemProps {
  id: number
  title: string
  image: string
}

const ListItem: React.FC<ListItemProps> = ({ title, image, id }) => (
  <div className={style.container} data-cy="list-item">
    <Link to={`/animes/${id}`}>
      <img className={style.img} src={image} alt={title} />
      <h3 className={style.title}>{title}</h3>
    </Link>
  </div>
);

export default ListItem;
