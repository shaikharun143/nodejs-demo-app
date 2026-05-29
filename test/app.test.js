const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('responds with a greeting', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Node.js Demo App');
  });
});

describe('GET /health', () => {
  it('returns an ok status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
