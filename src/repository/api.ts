import axios from 'axios'
import { AnimeItem } from './APImodel'

const API = 'https://api.aniapi.com';

const getAnimeList = async (searchValue?: string): Promise<AnimeItem[]> => {
  try {
    const query = searchValue ? `&title=${searchValue}` : '';
    const { data } = await axios.get(`${API}/v1/anime?per_page=10${query}`);
    const list = data.data.documents ? data.data.documents : [];
    return list as AnimeItem[];
  } catch (err) {
    throw err;
  }
};

export {
  getAnimeList,
};
