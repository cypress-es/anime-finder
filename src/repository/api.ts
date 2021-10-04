import axios from 'axios'
import { AnimeItem, Filters, Options } from './APImodel'

const API = 'https://api.aniapi.com';

const queryBuilder = (query: string, type: string, option: Options): string => (
  option[type] !== undefined ? `${query}&${type}=${option[type]}`: query
);

const getAnimeList = async (filters?: Filters): Promise<AnimeItem[]> => {
  try {
    const queryFilters = filters || {} as Filters;
    let query = queryFilters.title ? `&title=${queryFilters.title}` : '';
    if (queryFilters.options) {
      query = queryBuilder(query, 'status', queryFilters.options);
      query = queryBuilder(query, 'format', queryFilters.options);
      query = queryBuilder(query, 'period', queryFilters.options);
      query = queryBuilder(query, 'genres', queryFilters.options);
    }
    console.log(query);
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
