import axios from 'axios';

export const getToDosExampleFromAPI = async () => {
  const response = await axios.get('/todoexamples');
  console.log(response);
  return response;
};

