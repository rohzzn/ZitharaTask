import axios from 'axios';

const API = {

  getCustomers: async (page, limit, searchTerm, sort) => {
    return await axios.get('/api/customers', {
      params: {
        page,
        limit,
        searchTerm, 
        sort   
      }
    });
  }

};

export default API;