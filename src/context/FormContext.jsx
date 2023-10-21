import PropTypes from "prop-types"
import { createContext, useState } from 'react'
// Create a context
export const FormContext = createContext();

// Create a ContextProvider component
const FormContextProvider = ({ children }) => {
  // State to hold form data
  const [ formData, setFormData ] = useState({
    keywords: [],
    platforms: {
        facebook: false,
        instagram: false,
        twitter: false,
        threads: false
    }
})

// Handle changes to a specific checkbox
const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    // Clone the current selectedCheckboxes object
    const updatedCheckboxes = formData.platforms;

    // Update the state with the new value for the checkbox
    updatedCheckboxes[name] = checked;

    setFormData({
        ...formData,
        platforms: { ...formData.platforms, ...updatedCheckboxes } 
    });
    console.log(formData);
};


  return (
    <FormContext.Provider value={{ formData, handleCheckboxChange, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

FormContextProvider.propTypes = {
  children: PropTypes.any
}

export default FormContextProvider;
