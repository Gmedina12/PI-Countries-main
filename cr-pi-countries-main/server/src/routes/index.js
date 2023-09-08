const express = require('express');
const router = express.Router();
const {getCountries} = require('../Controllers/getCountries');
const {getCountryById} = require('../Controllers/getCountryById');
const {getCountryByName} = require('../Controllers/getCountryByname');
const {postActivity} = require('../Controllers/postActivity')
const {getAllActivities} = require('../Controllers/getAllActivities')
const {deleteActivity} = require ('../Controllers/deleteActivities')
const {getActivityByName} = require ('../Controllers/getActivityByName')

router.get('/countries', getCountries);//done
router.get('/countries/name',getCountryByName)//fixed
router.get('/countries/:idPais',getCountryById)//done
router.post('/activities', postActivity)//fixed
router.get('/activities/name',getActivityByName)//pending
router.get('/activities',getAllActivities)//done
router.delete('/activities/:idAtivities', deleteActivity)//pending

module.exports = router;
