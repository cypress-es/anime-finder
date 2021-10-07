import ReactSelect, { SingleValue, MultiValue } from 'react-select';
import { SelectOptions } from '../SearchForm/SearchForm.model';
import { SelectableValue, SelectProps } from './Select.model';

const Select: React.FC<SelectProps> = ({ name, isMulti = false, options, onChange }) => {
  const onSelectChange = (currentSelection: SelectableValue) => {
    if (isMulti) {
      const selectedValues = currentSelection as MultiValue<SelectOptions>;
      onChange(selectedValues.map(({ value }: SelectOptions) => value) || []);
    } else {
      const selectedValue = currentSelection as SingleValue<SelectOptions>;
      onChange(selectedValue?.value);
    }
  };

  return (
    <ReactSelect
      classNamePrefix={`${name}-select`}
      isMulti={isMulti}
      name={name}
      options={options}
      styles={{
        placeholder: styles => ({
          ...styles,
          textAlign: 'left',
        }),
      }}
      onChange={onSelectChange}
    />
  );
}

export default Select;
