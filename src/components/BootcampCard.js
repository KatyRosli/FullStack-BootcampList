import React, { useEffect, useState } from 'react';
import DeveloperCard from './DeveloperCard';

const BootcampCard = props => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    setDevelopers(props.developers);
  }, [props.developers]);

  const setOnToggleShowDeleteBtn = (toggledDevId) => {
    setDevelopers(developers.map((developer) => {
      if (toggledDevId !== developer.id) {
        return developer;
      }
      return {...developer, toggled: !developer.toggled};
    }));
  }

  return (
    <ul key={props.bootcamp} className='bootcamp --dev' data-testid={`liBootcamp-${props.bootcamp}`}>
      <p className='bootcamp__categories' data-testid={`pBootcamp-${props.bootcamp}`}>{props.bootcamp}</p>
      <p className='bootcamp__instructors'>instructors</p>
      {props.instructors.map((instructor, index) => {
        return <li className='bootcamp__instructors' key={index}>{instructor.name}</li>
      })}
      <p className='bootcamp__developers'>developers</p>
      {developers.filter(d => d.bootcamp === props.bootcamp).map((developer, index) => {
        return <DeveloperCard
          key={developer.id}
          id={developer.id}
          name={developer.name}
          toggled={developer.toggled}
          onToggleShowDeleteBtn={() => setOnToggleShowDeleteBtn(developer.id)}
          onDelete={() => props.deleteDeveloper(developer.id, developer.bootcamp)}
        ></DeveloperCard>
      })}
    </ul>
  );
}

export default BootcampCard;
