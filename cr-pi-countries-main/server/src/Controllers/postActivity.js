const { Activity, Country } = require('../db')
const {conn} = require ('../db')

const postActivity = async (req, res) => {
  try {
    const { name, picture, difficulty, duration, season, countries } = req.body;

    const [activity, created] = await Activity.findOrCreate({
      where: { name }, 
      defaults: {
        picture,
        difficulty,
        duration,
        season,
      },
    });
      console.log('Llegué antes de if')
     if (countries && countries.length > 0) {
      await activity.setCountries(countries);
    }
    console.log('Llegué después del if')

    const activityWithCountries = await Activity.findOne({
      where: { ID: activity.ID },
      include: { model: Country },//SE QUEBRO
    });

    res.status(200).json(activityWithCountries);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};
module.exports = {
  postActivity,
}

