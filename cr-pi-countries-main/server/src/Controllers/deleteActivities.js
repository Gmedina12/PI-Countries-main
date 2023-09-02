const { Activity } = require('../db')

const deleteActivity = async (req,res) => {
try{
    const {id} = req.query
    const activityToDelete = await Activity.findByPk(id)
    if (!activityToDelete) {
        res.status(404).json({ error: 'Error 404: Not found' })
    }
    else {
        await activity.destroy();
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