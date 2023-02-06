import client from '../client';

const getBootcampRequest = async (setBootcamps) => {
  const url = `${client().prefixUrl}`;

  const response = await fetch(url, { mode: 'cors' });
  const responseJson = await response.json();

  if (responseJson) {
    setBootcamps(responseJson);
  }
 };

 const addDeveloperRequest = async (developer, addedCallback) => {
  const url = `${client().prefixUrl}/${developer.bootcamp}`;
  const reqOptions = {
    mode: 'cors',
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(developer)
  };

  const response = await fetch(url, reqOptions);
  const jsonResponse = await response.json();
  if (jsonResponse) {
    addedCallback(jsonResponse, developer.bootcamp);
  }
 };

 const deleteDeveloperRequest = async (developer) => {
  const url = `${client().prefixUrl}/${developer.bootcamp}/developers/${developer.id}`;
  const reqOptions = {
    mode: 'cors',
    method: 'DELETE',
    headers: { 
        'Content-Type': 'application/json'
    }
  };

  await fetch(url, reqOptions);
 };

 export { getBootcampRequest, addDeveloperRequest, deleteDeveloperRequest };
 