
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments('user_id')
      tbl.string('user_name', 128).notNullable()
      tbl.string('email', 128).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
