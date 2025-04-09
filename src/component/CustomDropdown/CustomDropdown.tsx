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

// import React from "react";
// import Select, { MultiValue } from "react-select";
// import "./CustomDropdown.scss"; // Import SCSS file

// interface Option {
//   label: string;
//   value: string;
// }

// interface CustomDropdownProps {
//   label?: string;
//   options: Option[];
//   value: Option[];
//   onChange: (selected: Option[]) => void;
//   placeholder?: string;
// }

// const CustomDropdown: React.FC<CustomDropdownProps> = ({
//   label,
//   options,
//   value,
//   onChange,
//   placeholder,
// }) => {
//   const handleChange = (selected: MultiValue<Option>) => {
//     onChange(selected as Option[]);
//   };

//   return (
//     <div className="custom-dropdown-container">
//       {label && <label>{label}</label>}
// <Select
//   isMulti
//   options={options}
//   value={value}
//   onChange={handleChange}
//   placeholder={placeholder || ""}
//   className="custom-dropdown"
//   classNamePrefix="react-select" // Ensure correct styling from SCSS
//   styles={{
//     control: (provided: any) => ({
//       ...provided,
//       minHeight: "30px",
//     //   height: "30px",
//       width: "167px",
//       display: "flex",
//       alignItems: "center",
//       borderRadius: "5px",
//       border: "1px solid #ccc",
//       boxShadow: "none",
//     }),
//     menu: (provided: any) => ({
//       ...provided,
//       zIndex: 9999,
//     }),
//     menuPortal: (base: any) => ({
//       ...base,
//       zIndex: 9999,
//     }),
//     indicatorSeparator: () => ({
//       display: "none",
//     }),
//     dropdownIndicator: (provided: any) => ({
//       ...provided,
//       padding: "0 8px",
//       color: "black",
//     }),
//     multiValue: (provided: any) => ({
//       ...provided,
//       backgroundColor: "#e3f2fd",
//       borderRadius: "3px",
//       height: "22px",
//       display: "flex",
//       alignItems: "center",
//       padding: "2px 5px",
//     }),
//     multiValueLabel: (provided: any) => ({
//       ...provided,
//       fontSize: "12px",
//       color: "#000",
//     }),
//     multiValueRemove: (provided: any) => ({
//       ...provided,
//       color: "#000",
//       ":hover": {
//         backgroundColor: "red",
//         color: "white",
//       },
//     }),
//   }}
// />

//     </div>
//   );
// };

// export default CustomDropdown;

// import React, { useState } from "react";
// import Select, { MultiValue, components } from "react-select";
// import "./CustomDropdown.scss";

// interface Option {
//   label: string;
//   value: string;
// }

// interface CustomDropdownProps {
//   label?: string;
//   options: Option[];
//   value: Option[];
//   onChange: (selected: Option[]) => void;
//   placeholder?: string;
// }

// const CustomDropdown: React.FC<CustomDropdownProps> = ({
//   label,
//   options,
//   value,
//   onChange,
//   placeholder,
// }) => {
//   const [showTooltip, setShowTooltip] = useState(false);

//   const handleChange = (selected: MultiValue<Option>) => {
//     onChange(selected as Option[]);
//   };

//   const CustomMultiValue = (props: any) => {
//     const { index, getValue } = props;
//     const selected = getValue();

//     if (index === 0) {
//       return (
//         <div className="first-selected">
//           <components.MultiValue {...props} />
//         </div>
//       );
//     }

//     if (index === 1) {
//       const remaining = selected.length - 1;
//       const others = selected.slice(1);

//       return (
//         <div
//           className="multi-value-summary"
//           onMouseEnter={() => setShowTooltip(true)}
//           onMouseLeave={() => setShowTooltip(false)}
//         >
//           +{remaining}
//           {showTooltip && (
//             <div className="custom-tooltip">
//               {others.map((opt: Option, idx: number) => (
//                 <div key={idx}>{opt.label}</div>
//               ))}
//             </div>
//           )}
//         </div>
//       );
//     }

//     return null;
//   };

//   return (
//     <div className="custom-dropdown-container">
//       {label && <label>{label}</label>}
//       <Select
//         isMulti
//         isClearable={false}
//         options={options}
//         value={value}
//         onChange={handleChange}
//         placeholder={placeholder || ""}
//         className="custom-dropdown"
//         classNamePrefix="react-select"
//         components={{ MultiValue: CustomMultiValue }}
//         styles={{
//           control: (provided: any) => ({
//             ...provided,
//             minHeight: "30px",
//             maxHeight: "30px",
//             width: "167px",
//             display: "flex",
//             alignItems: "center",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//             boxShadow: "none",
//             overflow: "hidden",
//             whiteSpace: "nowrap",
//             paddingRight:"30px"
//           }),
//           valueContainer: (provided: any) => ({
//             ...provided,
//             maxHeight: "30px",
//             overflow: "hidden",
//             display: "flex",
//             alignItems: "center",
//             padding: "0 4px",
//             gap: "4px",
//             flex:1
//           }),
//           menu: (provided: any) => ({
//             ...provided,
//             zIndex: 9999,
//           }),
//           indicatorSeparator: () => ({
//             display: "none",
//           }),
//           dropdownIndicator: (provided: any) => ({
//             ...provided,
//             padding: "0 8px",
//             color: "black",
//             position: "absolute",
//             right: 0,
//             height: "100%",
//             display: "flex",
//             alignItems: "center"
//           }),
//         }}
//       />
//     </div>
//   );
// };

// export default CustomDropdown;




import React, { useState } from "react";
import Select, { MultiValue, components } from "react-select";
import "./CustomDropdown.scss";

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
  const [showTooltip, setShowTooltip] = useState(false);

  const handleChange = (selected: MultiValue<Option>) => {
    onChange(selected as Option[]);
  };

  const CustomMultiValue = (props: any) => {
    const { index, getValue } = props;
    const selected = getValue();

    if (index === 0) {
      return (
        <div className="first-selected">
          <components.MultiValue {...props} />
        </div>
      );
    }

    if (index === 1) {
      const remaining = selected.length - 1;
      const others = selected.slice(1);

      return (
        <div
          className="multi-value-summary"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          +{remaining}
          {showTooltip && (
            <div className="custom-tooltip">
              {others.map((opt: Option, idx: number) => (
                <div key={idx}>{opt.label}</div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="custom-dropdown-container">
      {label && <label>{label}</label>}
      <div className="select-wrapper">
        <Select
          isMulti
          isClearable={false}
          options={options}
          value={value}
          onChange={handleChange}
          placeholder={placeholder || ""}
          className="custom-dropdown"
          classNamePrefix="react-select"
          components={{ MultiValue: CustomMultiValue }}
          styles={{
            control: (provided: any) => ({
              ...provided,
              minHeight: "30px",
              maxHeight: "30px",
              width: "167px",
              display: "flex",
              alignItems: "center",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxShadow: "none",
              paddingRight: "30px", // Reserve space for arrow
              position: "relative",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }),
            valueContainer: (provided: any) => ({
              ...provided,
              maxHeight: "30px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              padding: "0 4px",
              gap: "4px",
              flexWrap: "nowrap",
              flex: 1,
            }),
            menu: (provided: any) => ({
              ...provided,
              zIndex: 9999,
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
            dropdownIndicator: (provided: any) => ({
              ...provided,
              padding: "0 8px",
              color: "black",
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              zIndex: 2,
            }),
          }}
        />
      </div>
    </div>
  );
};

export default CustomDropdown;




