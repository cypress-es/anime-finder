import { SelectOptions } from './SearchForm.model';

export const STATUS_OPTIONS: SelectOptions[] = [
  { value: 0, label: 'Finished' },
  { value: 1, label: 'Releasing' },
  { value: 2, label: 'Not yet released' },
  { value: 3, label: 'Cancelled' },
];

export const FORMAT_OPTIONS: SelectOptions[] = [
  { value: 0, label: 'TV' },
  { value: 1, label: 'TV short' },
  { value: 2, label: 'Movie' },
  { value: 3, label: 'Special' },
  { value: 4, label: 'Ova' },
  { value: 5, label: 'Ona' },
  { value: 6, label: 'Music' },
];

export const SEASON_PERIOD: SelectOptions[] = [
  { value: 0, label: 'Winter' },
  { value: 1, label: 'Spring' },
  { value: 2, label: 'Summer' },
  { value: 3, label: 'Fall' },
  { value: 4, label: 'Unknown' },
];
