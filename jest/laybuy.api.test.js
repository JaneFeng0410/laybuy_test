'use strict';
const axios = require('axios');
const API = require('./laybuy.api');

var response;

describe('Users API Test', () => {
  
  test('Assert the call responds with a successful status code', async () => {    
    response = await API.users();
    expect(response.status).toBe(200);
  });

  test('Validate 10 records are returned', () => {    
    expect(response.data.length).toBe(10);
  });

  test('Validate you can retrieve data for a single user', () => {    
    expect(response.data[0]).not.toBeNull();
  });

  test('Assert that the user “Mrs. Dennis Schulist” is contained in the list', () => {    
    expect(response.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({name:'Mrs. Dennis Schulist'})
      ])
    );
  });

});
