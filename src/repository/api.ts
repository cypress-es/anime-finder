import axios from 'axios'
import { AnimeItem } from './APImodel'

const API = 'https://api.aniapi.com';

const getAnimeList = async (): Promise<AnimeItem[]> => {
  try {
    const { data } = await axios.get(`${API}/v1/anime?per_page=10`);
    return data.data.documents as AnimeItem[];
  } catch (err) {
    throw err;
  }
};

export {
  getAnimeList,
};
