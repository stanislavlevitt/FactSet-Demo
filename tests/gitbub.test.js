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

  describe('/api/github/limit', () => {

    const limit = Math.floor(Math.random() * 100) + 1

    it('GET /api/github/limit', async () => {
      const res = await request(app)
        .get(`/api/github/${limit}`)
        .expect(200)
        expect(res.body.Repositories).to.have.lengthOf(limit)
    })
  }) // end describe('/api/github/limit')

  describe('/api/github/date', () => {

    const limit = Math.floor(Math.random() * 5) + 1
    const date = `2022-02-10`
    it('GET /api/github/date', async () => {
      const res = await request(app)
        .get(`/api/github/${limit}?date=${date}`)
        .expect(200)

        const startDate = new Date(date);
        res.body.Repositories.forEach(repo => {
          const repoDate = new Date(repo.date);
          expect(repoDate).to.be.greaterThan(startDate)
        });

        expect(res.body.Repositories).to.have.lengthOf(limit)
    })
  }) // end describe('/api/github/date')

  describe('error handle', () => {

    it('GET /api/someRoute', async () => {
      const res = await request(app)
        .get('/api/someRoute')
        .expect(404)
    })
  }) // end describe('error handle')
}) // end describe('Api routes')
