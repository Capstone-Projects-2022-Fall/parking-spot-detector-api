const { exec } = require('child_process');
const request = require('supertest');
const { expect } = require('chai');

var app;

describe('AdminController', function() {
  beforeEach(async () => {
    await exec('../../scripts/drop_database_table.sh');
    app = require('../../src');
  });

  it('should send back a valid JSON object', async () => {
    request(app)
      .get('/admins')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});