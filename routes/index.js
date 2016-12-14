'use strict';

var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const env = 'development';



// Gets home page with seed data
router.get('/', function(req, res, next) {
    knex('list').select().then(function(lists) {
        res.render('index', {
            lists: lists
        });
    });
});

// New form to add task
router.get('/new', function(req, res, next) {
    res.render('new', {
        title: 'stuff'
    });
});
//
//  Gets detail view of one task
router.get('/detail/:id', function(req, res, next) {
    knex('list')
        .where('id', req.params.id)
        .then(function(task) {
            res.render('detail', task[0])
        })
})

// creates a new task and renders new task on detail page
router.post('/new', (req, res, next) => {
    knex('list')
        .insert(req.body)
        .returning('id')
        .then(function(id) {
            res.redirect('/detail/' + id);
        });
});




module.exports = router;
