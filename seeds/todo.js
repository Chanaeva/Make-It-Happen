
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('list').del()
    .then(function () {
      var listSeed = [

	knex('list').insert({
		name: 'Chana',
		date: '12/13/2016',
		time: '1pm',
    event:'Make fullstack app'
	}),
  knex('list').insert({
    name: 'Ryder',
    date: '12/14/2016',
    time: '12pm',
    event:'Do dishes'
  }),
  knex('list').insert({
    name: 'Ryder',
    date: '12/17/2016',
    time: '3pm',
    event:'Make dinner'
  }),
  knex('list').insert({
    name: 'Chana',
    date: '12/17/2016',
    time: '4pm',
    event:'Study'
  }),
  knex('list').insert({
    name: 'Chana',
    date: '12/19/2016',
    time: '6pm',
    event:'Clean'
  }),
  knex('list').insert({
    name: 'Chana',
    date: '12/20/2016',
    time: '7pm',
    event:'Study'
  }),
  knex('list').insert({
    name: 'Ryder',
    date: '12/20/2016',
    time: '6pm',
    event:'Work'
  }),
  knex('list').insert({
    name: 'Chana',
    date: '12/20/2016',
    time: '5pm',
    event:'Make dinner'
  }),
]

return knex('list').del()
	.then(function() {
		return Promise.all(listSeed);
	});
    });
};
