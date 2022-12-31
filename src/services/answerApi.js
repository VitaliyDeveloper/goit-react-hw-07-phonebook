import axios from 'axios';

axios.defaults.baseURL = 'https://yesno.wtf';

export const getStatus = async () => {
  const {
    data: { image, answer },
  } = await axios('/api');
  return { image, answer };
};
