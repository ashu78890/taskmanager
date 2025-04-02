// import React from "react";
// import CustomDropdown from "../CustomDropdown/CustomDropdown"
// import "./FIlterComponent.scss"
//  // Import Filters type

// // Define Option type
// export interface Option {
//   label: string;
//   value: string;
// }
// export interface Filters {
//     category: Option[];
//     brand: Option[];
//     price: Option[];
//     rating: Option[];
//     availability: Option[];
//   }

// // Props for FilterComponent
// interface FilterProps {
//   filters: Filters;
//   onFilterChange: (name: keyof Filters, value: Option[]) => void;
// }

// // Options for dropdowns
// const categoryOptions: Option[] = [
//   { label: "Electronics", value: "electronics" },
//   { label: "Clothing", value: "clothing" },
// ];

// const brandOptions: Option[] = [
//   { label: "Nike", value: "nike" },
//   { label: "Apple", value: "apple" },
// ];

// const priceOptions: Option[] = [
//   { label: "Low", value: "low" },
//   { label: "High", value: "high" },
// ];

// const ratingOptions: Option[] = [
//   { label: "4★ & Above", value: "4" },
//   { label: "3★ & Above", value: "3" },
// ];

// const availabilityOptions: Option[] = [
//   { label: "In Stock", value: "in-stock" },
//   { label: "Out of Stock", value: "out-of-stock" },
// ];

// const FilterComponent: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
//   return (
//     <div className="flex">
//       <CustomDropdown
       
//         options={categoryOptions}
//         value={filters.category}
//         onChange={(selected: Option[]) => onFilterChange("category", selected)}
//       />

//       <CustomDropdown
       
//         options={brandOptions}
//         value={filters.brand}
//         onChange={(selected: Option[]) => onFilterChange("brand", selected)}
//       />

//       <CustomDropdown
       
//         options={priceOptions}
//         value={filters.price}
//         onChange={(selected: Option[]) => onFilterChange("price", selected)}
//       />

//       <CustomDropdown
       
//         options={ratingOptions}
//         value={filters.rating}
//         onChange={(selected: Option[]) => onFilterChange("rating", selected)}
//       />

//       <CustomDropdown
        
//         options={availabilityOptions}
//         value={filters.availability}
//         onChange={(selected: Option[]) => onFilterChange("availability", selected)}
//       />
//     </div>
//   );
// };

// export default FilterComponent;



// import React from "react";
// import { FaSearch } from "react-icons/fa";
// import CustomDropdown from "../CustomDropdown/CustomDropdown";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "./FilterComponent.scss";

// export interface Option {
//   label: string;
//   value: string;
// }

// export interface Filters {
//   category: Option[];
//   brand: Option[];
//   price: Option[];
//   rating: Option[];
//   availability: Option[];
//   date?: Date | null;
//   searchTerm: string;
// }

// interface FilterProps {
//   filters: Filters;
//   onFilterChange: (name: keyof Filters, value: Option[] | Date | null | string) => void;
// }

// const categoryOptions: Option[] = [
//   { label: "Electronics", value: "electronics" },
//   { label: "Clothing", value: "clothing" },
// ];

// const brandOptions: Option[] = [
//   { label: "Nike", value: "nike" },
//   { label: "Apple", value: "apple" },
// ];

// const priceOptions: Option[] = [
//   { label: "Low", value: "low" },
//   { label: "High", value: "high" },
// ];

// const ratingOptions: Option[] = [
//   { label: "4★ & Above", value: "4" },
//   { label: "3★ & Above", value: "3" },
// ];

// const availabilityOptions: Option[] = [
//   { label: "In Stock", value: "in-stock" },
//   { label: "Out of Stock", value: "out-of-stock" },
// ];

// const FilterComponent: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
//   return (
//     <div className="filter-container">
//         <div className="filter_dropdown">
//       <CustomDropdown
//         options={categoryOptions}
//         value={filters.category}
//         onChange={(selected) => onFilterChange("category", selected)}
//       />

//       <CustomDropdown
//         options={brandOptions}
//         value={filters.brand}
//         onChange={(selected) => onFilterChange("brand", selected)}
//       />

//       <CustomDropdown
//         options={priceOptions}
//         value={filters.price}
//         onChange={(selected) => onFilterChange("price", selected)}
//       />

//       <CustomDropdown
//         options={availabilityOptions}
//         value={filters.availability}
//         onChange={(selected) => onFilterChange("availability", selected)}
//       />
     
//      </div>
//       <div className="date-picker">
//         <DatePicker
//           selected={filters.date || null}
//           onChange={(date:Date | null) => onFilterChange("date", date)}
//           dateFormat="yyyy-MM-dd"
//           placeholderText="Select Date"
//           popperClassName="datepicker-popper"
//         />
//       </div>

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={filters.searchTerm}
//           onChange={(e) => onFilterChange("searchTerm", e.target.value)}
//         />
//        <div className="search-icon">12</div>
//       </div>
//     </div>
//   );
// };

// export default FilterComponent;


import React from "react";
import { FaSearch } from "react-icons/fa";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FilterComponent.scss";

export interface Option {
  label: string;
  value: string;
}

export interface Filters {
  category: Option[];
  brand: Option[];
  price: Option[];
  rating: Option[];
  availability: Option[];
  dateRange?: [Date | null, Date | null]; // Update to an array for range
  searchTerm: string;
}

interface FilterProps {
  filters: Filters;
  onFilterChange: (name: keyof Filters, value: Option[] | [Date | null, Date | null] | string) => void;
}

const FilterComponent: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-container">
      <div className="filter_dropdown">
        <CustomDropdown
          options={[{ label: "Electronics", value: "electronics" }, { label: "Clothing", value: "clothing" }]}
          value={filters.category}
          onChange={(selected) => onFilterChange("category", selected)}
        />
        <CustomDropdown
          options={[{ label: "Nike", value: "nike" }, { label: "Apple", value: "apple" }]}
          value={filters.brand}
          onChange={(selected) => onFilterChange("brand", selected)}
        />
      </div>

      <div className="date-picker-container">
        <DatePicker
          selected={filters.dateRange ? filters.dateRange[0] : null}
          onChange={(update: [Date | null, Date | null]) => onFilterChange("dateRange", update)}
          startDate={filters.dateRange ? filters.dateRange[0] : null}
          endDate={filters.dateRange ? filters.dateRange[1] : null}
          selectsRange
          dateFormat="yyyy-MM-dd"
          placeholderText="Select Date Range"
          popperClassName="datepicker-popper"
        />
        <div className="date-picker-icon">15</div>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={filters.searchTerm}
          onChange={(e) => onFilterChange("searchTerm", e.target.value)}
        />
        <div className="search-icon">
          {/* <FaSearch />12 */}  12
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;

