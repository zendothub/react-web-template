import axios from 'axios';

export const getQuoteOfTheDay = async () => {
  const response = await axios.get('/api');
  console.log(response);
  return response;
};