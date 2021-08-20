const request = require('supertest');
const db = require('../../data/dbconfig.js');
const server = require('../server');
const User = require('../users/user_model');

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db('users').truncate()
})
afterAll(async () => {
    await db.destroy()
})

it('sanity check', ()=> {
    expect(true).not.toBe(false)
})