const Reflections = require('../models/reflections')

class ReflectionsController {
    static reflectionDataAdd(req, res) {
        const { success, low_point, take_away } = req.body;
        Reflections.add(success, low_point, take_away, req.user.id)
            .then((data) => {                
                res.status(201).json(data);
            })
            .catch((error) => {
                res.status(500).json({ message: 'internal server error' });
            });
    }

    static reflectionAllData(req, res) {
        Reflections.findAll(req.user.id)
            .then((data) => {
                res.status(201).json(data)
            })
            .catch((error) => {
                res.status(500).json({ message: 'internal server error' });
            });
    }

    static reflectionDataUpdate(req, res) {
        const {id} = req.params
        const { success, low_point, take_away } = req.body;
        Reflections.update(success, low_point, take_away, id, req.user.id)
            .then((data)=>{
                if(data.rowCount!=1) throw ({ name:'cantUpdated' })
                res.status(201).json({ message: 'data updated!!' })
            })
            .catch((error)=>{
                if (error.name === 'cantUpdated') {
                    res.status(500).json({ message: 'Data Reflections can not Updated' });
                } else {
                    res.status(500).json({ message: 'internal server error' });
                }
            })
    }

    static reflectionDataDelete(req, res) {
        const { id } = req.params
        Reflections.remove(id, req.user.id)
            .then((data) => {
                if(data.rowCount!=1) throw ({ name:"cantDeleted" })
                res.status(201).json({ message: 'data deleted!!' })

            })
            .catch((error) => {
                if(error.name === 'cantDeleted'){
                    res.status(400).json({message: 'Data Reflections can not Deleted'})
                } else {
                    res.status(500).json({ message: 'internal server error' });
                }
            })
    }
}

module.exports = ReflectionsController;