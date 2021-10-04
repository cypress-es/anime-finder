interface Langs {
  en: string
  jp: string
}

export interface Options {
  [key: string]: number | string
}
export interface Filters {
  title: string
  options: Options
}

export interface AnimeItem {
  anilist_id: number,
  mal_id: number,
  format: number,
  status: number,
  titles: Langs,
  descriptions: Langs,
  start_date: string,
  end_date: string,
  season_period: number,
  season_year: number,
  episodes_count: number,
  episode_duration: number,
  trailer_url: string,
  cover_image: string,
  cover_color: string,
  banner_image: string,
  genres: string[],
  score: number,
  id: number
}
