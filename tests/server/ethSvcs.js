'use strict';

const assert = require('assert');
const request = require('supertest');

describe('Create Service', () => {
  let server;
  beforeEach(function () {
      server = require('../../server/server.js');
    });
    afterEach(function () {
      server.close();
    });
  it('should return a 200 status code', () => {
    request(server)
      .post('/api/createEvent')
      .expect(200);
  })
})
