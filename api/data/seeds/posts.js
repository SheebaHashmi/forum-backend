/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
      knex('users').del()
      knex('posts').del()

      // Inserts seed entries
      await knex('users').insert([
        {user_id:1,username:"Jane",fullname:"Jane Doe",email:"janedoe@gmail.com",password:'1234'}
      ])
      await knex('posts').insert([
        {post_id: 1, post_title: 'Feeling the Burn', post_body: 'Stayed in the sun too long, and now I am totally burned!', author_id:'1'},
        {post_id: 2, post_title: 'Inspiration for today', post_body: 'Happiness is a good flow of life.', author_id:'1'},
        {post_id: 3, post_title: 'What did Elon Musk said', post_body: 'It would be an incredible adventure. And life needs to be more than just solving every day problems. You need to wake up and be excited about the future', author_id:'1'},
        
      ]);
  
};
