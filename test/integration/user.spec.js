
const request = require('supertest')
const app = require('../../src/server')

const USER_ENDPOINT = '/api/users'

describe('Unit test for Users', () => {
  describe('\Success Cases - Users', () => {
    test('should return a list of users', (done) => {
      request(app)
        .get(`${USER_ENDPOINT}`)
        .then((list) => {
          expect(list.length).toBe(5)
          done()
        })
        .catch((err) => {
          console.log('err', err)
          done(err)
        })
    })

    test('should create a new user', (done) => {
      request(app)
        .post(`${USER_ENDPOINT}`)
        .send({
          id: 6,
          nome: 'Lucas 6'
        })
        .then((list) => {
          expect(list.length).toBe(6)
          done()
        })
        .catch((err) => {
          console.log('err', err)
          done(err)
        })
    })

    test('should return 1 user', (done) => {
      request(app)
        .get(`${USER_ENDPOINT}/4`)
        .then((list) => {
          expect(list.length).toBe(1)
          done()
        })
        .catch((err) => {
          console.log('err', err)
          done(err)
        })
    })
  })
})
