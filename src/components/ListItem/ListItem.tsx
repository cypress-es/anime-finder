import React from 'react';
import { Link } from 'react-router-dom';
import style from './ListItem.module.scss';

interface ListItemProps {
  id: number
  title: string
  image: string
}

const ListItem: React.FC<ListItemProps> = ({ title, image, id }) => (
  <Link className={style.container} to={`/animes/${id}`}>
    <article data-cy="list-item">
      <figure>
        <div className={style.imageContainer}>
          <img
            className={style.img}
            src={image}
            alt={title}
            title={title}
          />
        </div>
        <figcaption className={style.title}>{title}</figcaption>
      </figure>
    </article>
  </Link>
);

export default ListItem;
