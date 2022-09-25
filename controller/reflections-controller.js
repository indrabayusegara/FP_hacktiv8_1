const Reflections = require('../models/reflections')

class ReflectionsController { 
    //Create Data Reflections
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

    //Read Data Reflections
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

    //Update Data Reflectios
    static reflectionDataUpdate(req, res) {
        const { success, low_point, take_away } = req.body; 
        const {id} = req.params; 
        Reflections.update(success, low_point, take_away, req.user.id, id) 
        .then((data) => {
            res.status(201).json(data);
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ message: 'internal server error' });
        });
    }

    //Delete Data Reflections 
    static reflectionDataDelete(req, res) {
        const {id} = req.params; 
        console.log(id); 
        Reflections.delete(id)
        .then((data) => {
            res.status(500).json({message: `Success Delete Data Where id = ${data.id}`});  
        }).catch((err) => {
            console.log(err);
            res.status(500).json({message: "internal server error"});  
      });
    }
} 

module.exports = ReflectionsController;