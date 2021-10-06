import { MultiValue, SingleValue } from 'react-select';
import { SelectOptions } from '../SearchForm/SearchForm.model';

type SelectValue = string | number | (string | number)[] | undefined;

export interface SelectProps {
  name?: string,
  isMulti?: boolean,
  options: SelectOptions[],
  onChange: (selectedValues: SelectValue) => void,
}

export type SelectableValue = SingleValue<SelectOptions> | MultiValue<SelectOptions>;
