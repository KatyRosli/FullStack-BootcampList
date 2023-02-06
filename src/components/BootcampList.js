import React from 'react';
import BootcampCard from './BootcampCard';

const BootcampList = props => {
  const renderBootcampCards = bootcamps => {
    return bootcamps.map(bootcamp => (
      <BootcampCard
        bootcamp={bootcamp.bootcamp}
        instructors={bootcamp.instructors}
        developers={props.developers}
        key={bootcamp.bootcamp}
        deleteDeveloper={props.deleteDeveloper}
      />
    ));
  }

  const bootcamps = renderBootcampCards(props.bootcamps.filter(b => props.galleryFilter === 'all' || b.bootcamp === props.galleryFilter));

  return (
    <>
       {bootcamps}
    </>
  );
};

export default BootcampList;
