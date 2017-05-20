//set up the database if not exist
// This file should be run once from the command line to initialize the db schema.  Be sure to edit the url const with the target url.
const pg = require('pg');

const url = '127.0.0.1';

var db = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'helentang',
    password: '',
    database: 'trendgame'
  }
});

db.schema.hasTable('trends').then(function (exists) {
  if (!exists) {
    db.schema.createTable('trends', function (trend) {
      trend.increments('id').primary();
      trend.string('name');
      trend.timestamps(true, true);
    }).then(function (table) {
      console.log('Created Table trends');
    });
  }
});
db.schema.hasTable('weeks').then(function (exists) {
  if (!exists) {
    db.schema.createTable('weeks', function (week) {
      week.increments('id').primary();
      week.string('startDate');
      week.integer('popularity');
      week.integer('trendId').unsigned();
      week.foreign('trendId').references('trends.id');
    }).then(function (table) {
      console.log('created Table weeks');
    });
  }
});
db.schema.hasTable('stories').then(function (exists) {
  if (!exists) {
    db.schema.createTable('stories', function (story) {
      story.increments('id').primary();
      story.string('articleName', 500);
      story.string('mediaUrl', 200);
      story.string('url', 500);
      story.string('previewText', 1000);
      story.integer('weeksId').unsigned();
      story.foreign('weeksId').references('weeks.id');
    }).then(function (table) {
      console.log('created Table stories');
    });
  }
});

// Table for Authentication
db.schema.hasTable('users').then(function (exists) {
  if (!exists) {
    db.schema.createTable('users', function (user) {
      user.string('id');
      user.string('token');
      user.string('email');
      user.string('name');
    }).then(function(table) {
      console.log('created Table stories');
    });
  }
});

