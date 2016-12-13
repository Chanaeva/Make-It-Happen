
exports.up = function(knex, Promise) {
return knex.schema.createTable('list', table => {
  table.increments();
  table.text('name');
  table.date('date');
  table.timestamp('time');
  table.text('event');
});
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('list');
};
