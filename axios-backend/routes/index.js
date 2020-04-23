const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page */
router.get('/', (req, res, next) => {
  axios.get('https://swapi.py4e.com/api/species/')
    .then(response => {
      const species = response.data.results;
      res.render('index', { list: species });
    });
});

module.exports = router;
