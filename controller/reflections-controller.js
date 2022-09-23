const pool = require('./../config/config')
const Reflections = require('./../models/reflections')


class ReflectionsController {
    static reflectionDataAdd(req, res) {
        const {succes, low_point, take_away, owner_id} = req.body
        Reflections.add(succes, low_point, take_away, owner_id)
        .then((data)=>{
            res.status(201).json(data)
        })
        .catch((error)=>{
            res.status(500).json({message: 'internal server error'})
        })
    }
    
    static reflectionAllData(req, res) {
        Reflections.findAll()
        .then((data)=>{
            res.status(201).json(data)
            console.log(data)
        })
        .catch((error)=>{
            res.status(500).json(error)
            console.log(error)
        })
    }

    static reflectionDataUpdate(req, res) {
        res.status(200).json({ message: "reflections update" })
    }

    static reflectionDataDelete(req, res) {
        res.status(200).json({ message: "reflections delete" })
    }
}

module.exports = ReflectionsController