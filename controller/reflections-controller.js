const Reflections = require('../models/reflections')

class ReflectionsController {
    static reflectionDataAdd(req, res) {
        const { success, low_point, take_away } = req.body;
        Reflections.add(success, low_point, take_away, req.user.id)
        .then((data)=>{
            res.status(201).json(data);
        })
        .catch((error)=>{
            console.log(error);
            res.status(500).json({ message: 'internal server error' });
        });
    }
    
    static reflectionAllData(req, res) {
        Reflections.findAll(req.user.id)
        .then((data)=>{
            res.status(201).json(data)
        })
        .catch((error)=>{
            console.log(error)
            res.status(500).json({ message: 'internal server error' });
        });
    }

    static reflectionDataUpdate(req, res) {
        res.status(200).json({ message: "reflections update" })
    }

    static reflectionDataDelete(req, res) {
        res.status(200).json({ message: "reflections delete" })
    }
}

module.exports = ReflectionsController;