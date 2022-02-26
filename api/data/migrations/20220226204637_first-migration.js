/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('users',(users) => {
      users.increments('user_id')
      users.string('fullname',200).notNullable()
      users.string('username',200).notNullable()
      users.string('password',200).notNullable()
      users.timestamps(false,true)

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users')
};
