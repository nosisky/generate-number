import expect from 'expect';
import supertest from 'supertest';

import server from '../server';

describe('Number generator: ', () => {
  it('lists numbers', (done) => {
    supertest(server)
      .get('/api/list')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).toBe(200);
        expect(res.body).toBeTruthy;
        done();
      });
  });

  it('generate numbers', (done) => {
    supertest(server)
      .get('/api/generate')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).toBe(200);
        expect(res.body).toBeTruthy;
        expect(res.body.phoneNumbers.length).toBeGreaterThan(2);
        done();
      });
  });
});
