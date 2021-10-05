import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import * as api from '../../repository/api';
import { AnimeItem } from '../../repository/APImodel';
import style from './AnimeDetail.module.scss';

interface AnimeDetailParams {
  id: string
}

const AnimeDetail = (): JSX.Element => {
  const [detail, setDetail] = useState<AnimeItem|null>(null);
  const { id } = useParams<AnimeDetailParams>();
  useEffect(() => {
    api.getAnimeDetail(+id)
      .then(item => {
        setDetail(item);
      });
  }, [id]);
  return (
    <MainLayout>
      <div>
        {detail && (
          <>
            <img className={style.img} src={detail.banner_image} alt={detail.titles.en} />
            <div className={style.container}>
              <div className={style.header}>
                <h3 className={style.title}>{detail.titles.en}</h3>
                <span
                  style={{
                    backgroundColor: detail.cover_color,
                  }}
                >
                  {detail.score}
                </span>
              </div>
              <p>{detail.descriptions.en}</p>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default AnimeDetail;
