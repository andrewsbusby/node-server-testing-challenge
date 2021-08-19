const db = require('../../data/dbconfig');

const getAll = () => {
    return db('users')
}

const getById = (id) => {
    return db('users').where('user_id', id).first()
}

const add = async (user) => {
    const [id] = await db('users').insert(user)
    return db('users').where('user_id', id).first()
}

const remove = async (id) => {
    const bye = await db('users').where('user_id', id).first()
    await db('users').where('user_id', id).del()
    return bye
}

module.exports = {
    getAll,
    getById,
    add,
    remove
}