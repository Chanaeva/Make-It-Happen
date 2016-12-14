'use strict';

var express = require('express');
var router = express.Router();
const knex= require('../db/knex');
const env = 'development';



/* GET home page. */
router.get('/', function(req, res, next) {
  knex('list').select().then(function(lists){
    res.render('index',{lists:lists});
  });
});

// new form to add stuff
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'stuff' });
});
//

router.post('/', function(req, res, next) {
  knex('list')
  .insert(req.body.id)
  .returning('id')
  .then(function (id) {
    res.redirect('/detail/'+id);
  });
  });

  router.get('/detail/:id', function(req, res, next){
    knex('list')
    .where('id',req.params.id)
    .then(function(task) {
      res.render('detail', task[0])
    })
  })

  router.get('/', function(req, res, next) {
    knex('list')
    .where('id',req.params.id)
    .first()
    .then(data)
    res.render('list_id', {
      name: list.name
    });

  });
//
//
// router.get('/list', (req, res, next) => {
//   knex('list')
//   .select()
//   .then(list);
// });
//
//

module.exports = router;
