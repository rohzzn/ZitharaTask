import axios from 'axios';

const API = {

  getCustomers: async () => {
    return await axios.get('/api/customers'); 
  }

};

export default API;