import React, { useEffect, useState } from 'react';
import FilterBootcamp from './FilterBootcamp';

const AddNewDeveloperForm = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bootcamp, setBootcamp] = useState('');
  const [emptyFirstName, setEmptyFirstName] = useState(true);
  const [emptyLastName, setEmptyLastName] = useState(true);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  
  useEffect(() => {
    setBootcamp(props.bootcamps[0]);
  }, [props.bootcamps])

  const handleFirstNameChange = e => {
    if (e.target.value.length === 0) {
      setEmptyFirstName(true);
    } else {
      setEmptyFirstName(false);
    } 
    setFirstName(e.target.value);
  }

  const handleLastNameChange = e => {
    if (e.target.value.length === 0) {
      setEmptyLastName(true);
    } else {
      setEmptyLastName(false);
    } 
    setLastName(e.target.value);
  }

  const handleSelectChange = bootcamp => {
    setBootcamp(bootcamp);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!emptyFirstName && !emptyLastName) {
      props.addNewDeveloper(firstName + ' ' + lastName, bootcamp);
      setEmptyFirstName(true);
      setEmptyLastName(true);
      setShowErrorMsg(false);
      setFirstName('');
      setLastName('');
    } else {
      setShowErrorMsg(true);
    }
  }

  return (
    <form className='addDeveloperForm' id='addDeveloperForm' onSubmit={handleSubmit}>
      {showErrorMsg && <h4 className='errorMessage'>Please make sure that all fields are entered.</h4>}
      <label className='addNewDeveloperForm__firstName'>First Name:</label><br/>
      <input type='text' id='addDeveloperFirstNameInput' data-testid='addDeveloperFirstNameInput' className='addDeveloperFirstNameInput' name='firstname' autoComplete='off' value={firstName} onChange={handleFirstNameChange} /><br/>
      <label className='addNewDeveloperForm__lastName'>Last Name:</label><br/>
      <input type='text' id='addDeveloperLastNameInput' data-testid='addDeveloperLastNameInput' className='addDeveloperLastNameInput' name='lastname' autoComplete='off' value={lastName} onChange={handleLastNameChange} /><br/>
      <label htmlFor="bootcamp" className='selectBootcamp'>Select bootcamp:</label>
      <FilterBootcamp bootcamps={props.bootcamps} bootcamp={bootcamp} setBootcampChangeHandler={handleSelectChange} />
      <button type='sumbit' className='addDeveloper__submit' id='addDeveloperBtn' data-testid='addDeveloperBtn'>Add Developer</button>
    </form>
  );
}

export default AddNewDeveloperForm;
