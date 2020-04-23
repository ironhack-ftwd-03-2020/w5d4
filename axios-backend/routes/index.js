const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page */
router.get('/', (req, res, next) => {
  axios.get('https://swapi.py4e.com/api/species/')
    .then(response => {
      const list = response.data.results;
      res.render('index', { list });
    });
});

module.exports = router;
