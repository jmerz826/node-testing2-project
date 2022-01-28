const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db.seed.run()
})
afterAll(async () => {
    await db.destroy()
})

test('sanity check', () => {
    expect(1).toBe(1)
})

describe('GET band(s) endpoints', () => {
    it('returns 200 status and all bands', async () => {
        const res = await request(server).get('/api/bands')
        expect(res.status).toBe(200)
        expect(res.body).toHaveLength(7)
    })
    it('returns 200 status and selected band via params', async () => {
        const res = await request(server).get('/api/bands/1')
        expect(res.status).toBe(200)
        expect(res.body.band_name).toBe('Led Zeppelin')
    })
    it('returns correct error if band with "id" does not exist', async () => {
        const res = await request(server).get('/api/bands/999')
        expect(res.status).toBe(404)
        expect(res.body.message).toBe("couldn't find band with id 999")
    })
})