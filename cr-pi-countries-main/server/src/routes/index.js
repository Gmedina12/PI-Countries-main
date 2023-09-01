const express = require('express');
const router = express.Router();
const {getCountries} = require('../Controllers/getCountries');
const {getCountryById} = require('../Controllers/getCountryById');
const {getCountryByName} = require('../Controllers/getCountryByname');
const {postActivity} = require('../Controllers/postActivity')
const {getAllActivities} = require('../Controllers/getAllActivities')

router.get('/countries', getCountries);//done
router.get('/countries/name',getCountryByName)//fixed
router.get('/countries/:idPais',getCountryById)//done
router.post('/activities', postActivity)//fixed
router.get('/activities',getAllActivities)//done

module.exports = router;
