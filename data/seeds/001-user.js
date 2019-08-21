exports.seed = function(knex, Promise) {
  // the 00-cleanup.js seed already deleted all records
  // we just worry about seeding records in all other seeds
  // Inserts seed entries
  return knex('users').insert([
    { username: 'Omer', password: 'test', email: 'omer@test.com' },
    { username: 'Novina', password: 'test', email: 'novina@test.com' }
  ]);
};
