const addDeveloper = (developers, name, bootcamp) => {
    const newDeveloper = { name: name, bootcamp: bootcamp };
    const addedList = [...developers, newDeveloper];
    return addedList;
  }
  
  const updateDeveloper = (developers, updatedDeveloper) => {
    return [...developers.filter(d => d.name !== updatedDeveloper.name), updatedDeveloper];
  }
  
  const removeDeveloper = (developers, id) => {
    return developers.filter(d => d.id !== id);
  }
  
  export { addDeveloper, removeDeveloper, updateDeveloper };
  