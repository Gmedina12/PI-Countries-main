const { Country, Activity } = require('../db');

const getCountryByName = async (req, res) =>{
    const {name} = req.query
    try{
        const countries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`, 
                },
                include:{
                    model: Activity,
                    attributes: ['ID', 'name', 'difficulty','duration','season'],
                },
            },
        });
        if(!countries.length){
            res.status(404).json({message: 'Country not found'})
        }
        else{
            res.status(200).json(countries)
        }
    }
    catch(error){
        res.status(500).json({error: error.message})
    }

}

module.exports = {
    getCountryByName
}