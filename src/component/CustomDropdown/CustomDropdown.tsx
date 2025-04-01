// import React from "react";
// import Select, { MultiValue } from "react-select";


// interface Option {
//   label: string;
//   value: string;
// }

// interface CustomDropdownProps {
//   label?: string;
//   options: Option[];
//   value: Option[]; // Multi-select values
//   onChange: (selected: Option[]) => void;
//   placeholder?: string;
// }

// const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, options, value, onChange,placeholder }) => {
//   const handleChange = (selected: MultiValue<Option>) => {
//     onChange(selected as Option[]);
//   };

//   return (
//     <div >
//      {label && <label>{label}</label>}
//       <Select
//         isMulti
//         options={options}
//         value={value}
//         onChange={handleChange}
//         placeholder={placeholder || ""} 
//         styles={{
//             control: (provided:any) => ({
//               ...provided,
//               minHeight: "30px",
//               height:"30px",
//               width: "167px",
//             }),

//             menu: (provided: any) => ({
//                 ...provided,
//                 zIndex: 9999, 
//               }),
//               menuPortal: (base: any) => ({ 
//                 ...base, 
//                 zIndex: 9999 
//               }),
//             indicatorSeparator: () => ({
//                 display: "none",
//               }),
//           }}
//         className="custom-dropdown"
//       />
//     </div>
//   );
// };

// export default CustomDropdown;

import React from "react";
import Select, { MultiValue } from "react-select";
import "./CustomDropdown.scss"; // Import SCSS file

interface Option {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  label?: string;
  options: Option[];
  value: Option[];
  onChange: (selected: Option[]) => void;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder,
}) => {
  const handleChange = (selected: MultiValue<Option>) => {
    onChange(selected as Option[]);
  };

  return (
    <div className="custom-dropdown-container">
      {label && <label>{label}</label>}
      {/* <Select
        isMulti
        options={options}
        value={value}
        onChange={handleChange}
        placeholder={placeholder || ""}
        className="custom-dropdown"
        classNamePrefix="react-select"
      /> */}

{/* <Select
  isMulti
  options={options}
  value={value}
  onChange={handleChange}
  placeholder={placeholder || ""}
  styles={{
    control: (provided: any) => ({
      ...provided,
      minHeight: "30px",
      height: "30px",
      width: "167px",
      display: "flex",
      alignItems: "center",
      borderRadius: "5px",
      border: "1px solid #ccc",
      boxShadow: "none",
    }),
    menu: (provided: any) => ({
      ...provided,
      zIndex: 9999,
    }),
    menuPortal: (base: any) => ({
      ...base,
      zIndex: 9999,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      padding: "0 8px",
      color: "black",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#e3f2fd",
      borderRadius: "3px",
      height: "22px",
      display: "flex",
      alignItems: "center",
      padding: "2px 5px",
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      fontSize: "12px",
      color: "#000",
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: "#000",
      ":hover": {
        backgroundColor: "red",
        color: "white",
      },
    }),
  }}
  className="custom-dropdown"
/> */}


<Select
  isMulti
  options={options}
  value={value}
  onChange={handleChange}
  placeholder={placeholder || ""}
  className="custom-dropdown"
  classNamePrefix="react-select" // Ensure correct styling from SCSS
  styles={{
    control: (provided: any) => ({
      ...provided,
      minHeight: "30px",
    //   height: "30px",
      width: "167px",
      display: "flex",
      alignItems: "center",
      borderRadius: "5px",
      border: "1px solid #ccc",
      boxShadow: "none",
    }),
    menu: (provided: any) => ({
      ...provided,
      zIndex: 9999,
    }),
    menuPortal: (base: any) => ({
      ...base,
      zIndex: 9999,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      padding: "0 8px",
      color: "black",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#e3f2fd",
      borderRadius: "3px",
      height: "22px",
      display: "flex",
      alignItems: "center",
      padding: "2px 5px",
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      fontSize: "12px",
      color: "#000",
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: "#000",
      ":hover": {
        backgroundColor: "red",
        color: "white",
      },
    }),
  }}
/>

    </div>
  );
};

export default CustomDropdown;
