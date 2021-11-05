import axios from 'axios';

// import basketData from '../sampleApiResponse/basket.json';

export const getBasketData = async () => {
  const response = await axios.get('sampleApiResponse/basket.json');
  return response;
};
