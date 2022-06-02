'use strict';
const axios = require('axios');
const path = 'https://jsonplaceholder.typicode.com/users';

const API = {
  async users() {
    try {
      const response = await axios.get(path);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = API;
