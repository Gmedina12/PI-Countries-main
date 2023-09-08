const { Country } = require('../db'); 
const { Activity } = require('../db'); 

const getActivityByName = async (req, res,) => {
    try{
     const {name} = req.query;
     console.log(name)
     const activity = await Activity.findAll({
       where: {
         name: {
           [Op.iLike]: `%${name}%`,
         },
       },
       include: {
         model: Country,
         through: { attributes: [] },
       },
     });
     res.status(200).json({activity})
    
 }
     catch (error) {
         res.status(500).json({ error: error.message });
         console.log(error.message);
     }
   };

module.exports = {
    getActivityByName,
};
