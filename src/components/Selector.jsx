import PropTypes from "prop-types"
import CreatableSelect from 'react-select/creatable';
import { FormContext } from "../context/FormContext";
import { useContext } from 'react';

const colourOptions = [
  { label: "smartphones", value: "smartphones" },
  { label: "standing fan", value: "standing fan" },
  { label: "gadgets", value: "gadgets" },
]

const Selector = () => {

  const { setFormData, formData } = useContext(FormContext)

  let terms = [];

  const handleChange = (selectedOption) => {

    for(var i = 0; i < selectedOption.length; i++) {
        terms.push(selectedOption[i].value)
    }
    setFormData({ ...formData, keywords: terms })
    // console.log(`Option selected:`, selectedOption);
    console.log(formData)
  };

  return (
    <div className='lg:w-[22rem] w-[18rem]'>
      <CreatableSelect onChange={handleChange} isClearable isMulti options={colourOptions}/>
    </div>
)};

Selector.propTypes = {
  formData: PropTypes.any,
  setFormData: PropTypes.func
}

export default Selector;