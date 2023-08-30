const { Country } = require('../db'); 
const {Activity} = require('../db'); 

const getCountries = async (req, res) => {
  try {
    const countries = await Country.findAll({
      include: {
        model: Activity,
        attributes: ['ID', 'name', 'difficulty','duration','season']
      }
    });
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

module.exports = {
  getCountries
};
