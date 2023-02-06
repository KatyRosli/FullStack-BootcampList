import React from 'react';

const FilterBootcamp = props => {

  const onChangeHandler = e => {
    props.setBootcampChangeHandler(e.target.value);
  }
    
  return (
    <nav className='filter'>
      <header className='filter' id='section_header'> 
      <h3>Filter Bootcamp</h3>
      </header>
      <select name='bootcamp' className='filter__categories'value={props.bootcamp} onChange={onChangeHandler}>
        {props.unselectedOptionText && <option value={props.unselectedOptionText.toLowerCase()}>{props.unselectedOptionText}</option>}
        {props.bootcamps.map((bootcamp, index) => {
        return <option key={index} value={ bootcamp }> { bootcamp.toUpperCase() } </option>
        })}
      </select>
     </nav>
  );
}

export default FilterBootcamp;
