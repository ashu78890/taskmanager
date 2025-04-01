import React from "react";
import Select, { MultiValue } from "react-select";


interface Option {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  label?: string;
  options: Option[];
  value: Option[]; // Multi-select values
  onChange: (selected: Option[]) => void;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, options, value, onChange,placeholder }) => {
  const handleChange = (selected: MultiValue<Option>) => {
    onChange(selected as Option[]);
  };

  return (
    <div >
     {label && <label>{label}</label>}
      <Select
        isMulti
        options={options}
        value={value}
        onChange={handleChange}
        placeholder={placeholder || ""} 
        styles={{
            control: (provided:any) => ({
              ...provided,
              minHeight: "30px",
              height:"30px",
              width: "167px",
            }),

            menu: (provided: any) => ({
                ...provided,
                zIndex: 9999, 
              }),
              menuPortal: (base: any) => ({ 
                ...base, 
                zIndex: 9999 
              }),
            indicatorSeparator: () => ({
                display: "none",
              }),
          }}
        className="custom-dropdown"
      />
    </div>
  );
};

export default CustomDropdown;
