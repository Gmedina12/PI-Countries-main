const { Country } = require('../db'); 
const { Activity } = require('../db'); 

const getCountryById = async (req, res) => {
    try {
        const { idPais } = req.params;
        const countryId = await Country.findOne({
            where: {
                ID:idPais
            },
            include: {
                model: Activity,
                attributes: ['ID', 'name', 'difficulty','duration','season'], 
                through: {attributes: []}
             } 
        });

        if (!countryId) {
            return res.status(404).json({ error: 'Error 404: Not found' });
        }
       return res.json(countryId);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCountryById,
};
