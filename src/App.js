import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import AddDeveloperForm from './components/AddDeveloperForm';
import FilterBootcamp from './components/FilterBootcamp';
import BootcampList from './components/BootcampList';
import { addDeveloperRequest, deleteDeveloperRequest, getBootcampRequest,  } from './api/services/Bootcamps.js';
import { addDeveloper, removeDeveloper, updateDeveloper } from './bootcampHelper';
import Footer from './components/Footer'
import './App.css';

const App = props => {
  const [developers, setDevelopers] = useState([])
  const [bootcamps, setBootcamps] = useState(props.bootcamps)
  const [latestDeveloperAddedBootcamp, setLatestDeveloperAddedBootcamp] = useState('')
  const [latestDeveloperDeleted, setLatestDeveloperDeleted] = useState(null)
  const [galleryFilter, setGalleryFilter] = useState('all')

  const bootcampRequestCallback = (bootcamps) => {
    bootcamps.forEach(b => {
      const newDevs = b.developers.map(d => {
        return ({...d, toggled: false, bootcamp: b.bootcamp });
      })
      b.developers = [];
      b.developers.push(...newDevs);
    });
    setBootcamps(bootcamps);
    setDevelopers(bootcamps.flatMap(({developers, ...rest}) => developers.map(d => ({
      ...d
    }))));
  }

  useEffect(() => {
    setBootcamps(bootcamps.map(b => ({ ...b, developers: developers.filter(d => d.bootcamp === b.bootcamp) })));
    if (latestDeveloperAddedBootcamp.length > 0) {
      const updatedDevelopersList = developers.filter(d => d.bootcamp === latestDeveloperAddedBootcamp);
      addDeveloperRequest(updatedDevelopersList[updatedDevelopersList.length-1], addedCallback);
      setLatestDeveloperAddedBootcamp('');
    }
    if (latestDeveloperDeleted) {
      deleteDeveloperRequest(latestDeveloperDeleted);
      setLatestDeveloperDeleted(null);
    }
  }, [developers])

  useEffect(() => {
    getBootcampRequest(bootcampRequestCallback);
  }, [])

  const addNewDeveloper = (name, bootcamp) => {
    setLatestDeveloperAddedBootcamp(bootcamp);
    setDevelopers(addDeveloper(developers, name, bootcamp));
  }

  const addedCallback = (newDeveloper, bootcamp) => {
    newDeveloper = {...newDeveloper, toggled: false, bootcamp: bootcamp};
    setDevelopers(updateDeveloper(developers, newDeveloper));
  }

  const deleteDeveloper = (id, bootcamp) => {
    setLatestDeveloperDeleted({id: id, bootcamp: bootcamp});
    setDevelopers(removeDeveloper(developers, id));
  }

  return (
    <main>
      <Header />
      <AddDeveloperForm addNewDeveloper={addNewDeveloper} bootcamps={bootcamps.map(bootcamp => {
        return bootcamp.bootcamp;
      })}/>
      <FilterBootcamp unselectedOptionText='All' setBootcampChangeHandler={setGalleryFilter} bootcamps={bootcamps.map(bootcamp => {
        return bootcamp.bootcamp;
      })}/>
      <BootcampList 
        bootcamps={bootcamps}
        developers={developers}
        galleryFilter={galleryFilter}
        deleteDeveloper={deleteDeveloper} />
      <Footer />
    </main>
  );
}

export default App;
