const {expect} = require('chai')
const request = require('supertest')
const app = require('../server/index')

describe('Api routes', () => {
  describe('/api/github/', () => {

    it('GET /api/github', async () => {
      const res = await request(app)
        .get('/api/github')
        .expect(200)
      expect(res.body).to.be.an('object')
      expect(res.body.Repositories).to.be.an('array')
      expect(res.body.Warning).to.be.an('string')
    })
  }) // end describe('/api/github')

  describe('error handle', () => {

    it('GET /api/someRoute', async () => {
      const res = await request(app)
        .get('/api/someRoute')
        .expect(404)
    })
  }) // end describe('error handle')
}) // end describe('Api routes')
