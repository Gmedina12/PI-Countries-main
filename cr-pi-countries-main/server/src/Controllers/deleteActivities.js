const { Activity } = require('../db')
const { conn } = require ('../db')

const deleteActivity = async (req,res) => {
try{
    const {idActivity} = req.params
    const activityToDelete = await Activity.findOne({where: {ID: parseInt(idActivity)}})
    if (!activityToDelete) {
        res.status(404).json({ error: 'Error 404: Not found' })
    }
    else {
        await Activity.destroy({where: {ID: parseInt(idActivity)}})
        res.status(200).json({message: 'Activity was deleted successfully'})
    }
}
catch (error){
    res.status(500).json({message: error.message})
    console.log(error.message)
}
       
    }

module.exports = {
    deleteActivity
}