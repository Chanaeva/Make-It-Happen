
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('list').del()
    .then(function () {
      var listSeed = [

	knex('list').insert({
		id: 1,
		name: 'Chana',
		date: '12/13/2016',
		time: '1pm',
    event:'Make fullstack app'
	}),
  knex('list').insert({
    id: 2,
    name: 'Ryder',
    date: '12/14/2016',
    time: '12pm',
    event:'Do dishes'
  }),
  knex('list').insert({
    id: 3,
    name: 'Ryder',
    date: '12/17/2016',
    time: '3pm',
    event:'Make dinner'
  }),
  knex('list').insert({
    id: 4,
    name: 'Chana',
    date: '12/17/2016',
    time: '4pm',
    event:'Study'
  }),
  knex('list').insert({
    id: 5,
    name: 'Chana',
    date: '12/19/2016',
    time: '6pm',
    event:'Clean'
  }),
  knex('list').insert({
    id: 6,
    name: 'Chana',
    date: '12/20/2016',
    time: '7pm',
    event:'Study'
  }),
  knex('list').insert({
    id: 7,
    name: 'Ryder',
    date: '12/20/2016',
    time: '6pm',
    event:'Work'
  }),
  knex('list').insert({
    id: 8,
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
