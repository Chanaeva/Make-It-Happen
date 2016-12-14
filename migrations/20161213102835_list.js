
exports.up = function(knex, Promise) {
return knex.schema.createTable('list', table => {
  table.increments();
  table.text('name').notNullable();
  table.date('date');
  table.text('time');
  table.text('event');
});
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('list');
};
