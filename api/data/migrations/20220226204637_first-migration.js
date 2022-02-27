/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
  .createTable('users',(users) => {
      users.increments('user_id')
      users.string('fullname',200).notNullable()
      users.string('username',200).notNullable()
      users.string('email',200).notNullable()
      users.string('password',200).notNullable()
      users.timestamps(false,true)
  })
  .createTable('posts',(posts) => {
      posts.increments('post_id')
      posts.string('post_title')
      posts.text('post_body').notNullable()
      posts.timestamp('created_at').defaultTo(knex.fn.now())
      posts.integer('author_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('posts')
  await knex.schema.dropTableIfExists('users')
};
