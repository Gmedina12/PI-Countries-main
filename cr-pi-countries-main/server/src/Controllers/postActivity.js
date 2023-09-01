const { Activity, Country } = require('../db')
const {conn} = require ('../db')

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    const [activity, created] = await Activity.findOrCreate({
      where: { name }, 
      defaults: {
        difficulty,
        duration,
        season,
      },
    });

     if (countries && countries.length > 0) {
      await activity.setCountries(countries);
    }

    const activityWithCountries = await Activity.findOne({
      where: { id: activity.id },
      include: { model: Country },
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
