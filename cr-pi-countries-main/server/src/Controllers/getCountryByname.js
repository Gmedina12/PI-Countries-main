const { Country, Activity } = require('../db');
const {Op} = require('sequelize')

const getCountryByName = async (req, res,) => {
   try{
    const {name} = req.query;
    console.log(name)
    const country = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Activity,
        through: { attributes: [] },
      },
    });
    res.status(200).json(country)
   
}
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error.message);
    }
  };


module.exports = {
    getCountryByName
};
