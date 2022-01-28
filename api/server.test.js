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

describe('GET /api/bands', () => {
    it('returns 200 status and all bands', async () => {
        const res = await request(server).get('/api/bands')
        expect(res.status).toBe(200)
        expect(res.body).toHaveLength(7)
    })
})