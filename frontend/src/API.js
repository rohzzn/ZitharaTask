import axios from 'axios';

const API = {

  getCustomers: async (page, limit, searchTerm, sort) => {
    return await axios.get('http://localhost:5001/api/customers', {
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