const express = require('express');
const router = express.Router();
const {getCountries} = require('../Controllers/getCountries');
const {getCountryById} = require('../Controllers/getCountryById');
const {getCountryByName} = require('../Controllers/getCountryByname');
const {postActivity} = require('../Controllers/postActivity')

router.get('/countries', getCountries);
router.get('/countries/:idPais',getCountryById)
router.get('/countries/name',getCountryByName)//
router.post('/activities', postActivity)

module.exports = router;
