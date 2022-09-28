const Reflections = require('../models/reflections')

class ReflectionsController {
    static reflectionDataAdd(req, res, next) {
        const { success, low_point, take_away } = req.body;
        Reflections.add(success, low_point, take_away, req.user.id)
            .then((data) => {                
                res.status(201).json(data);
            })
            .catch((error) => {
                next(error);
            });
    }

    static reflectionAllData(req, res, next) {
        Reflections.findAll(req.user.id)
            .then((data) => {
                res.status(201).json(data)
            })
            .catch((error) => {
                next(error);
            });
    }

    static reflectionDataUpdate(req, res, next) {
        const {id} = req.params
        const { success, low_point, take_away } = req.body;
        Reflections.update(success, low_point, take_away, id, req.user.id)
            .then((data)=>{
                if(data.rowCount!=1) throw ({ name:'cantUpdated' })
                res.status(201).json({ message: 'data updated!!' })
            })
            .catch((error)=>{
                next(error);
            })
    }

    static reflectionDataDelete(req, res, next) {
        const { id } = req.params
        Reflections.remove(id, req.user.id)
            .then((data) => {
                if(data.rowCount!=1) throw ({ name:"cantDeleted" })
                res.status(201).json({ message: 'data deleted!!' })
                
            })
            .catch((error) => {
                next(error);
            })
    }
}

module.exports = ReflectionsController;