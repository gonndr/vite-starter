import { Option, Select } from '@mui/joy';
import { DropdownOption } from './types';

type Props<V extends string> = {
  options: DropdownOption<V>[];
  onChange: (value: V | null) => void;
  value: V | null;
};

const Dropdown = <V extends string>({ options, onChange, value }: Props<V>) => {
  const defaultOption = options[0];
  return (
    <Select
      sx={{ width: '200px' }}
      defaultValue={defaultOption.value}
      onChange={(_, value) => onChange(value)}
      value={value}
    >
      {options.map(({ value, label }, idx) => (
        <Option key={`${value}-${idx}`} value={value}>
          {label}
        </Option>
      ))}
    </Select>
  );
};

export default Dropdown;
