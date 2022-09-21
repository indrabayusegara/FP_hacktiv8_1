const router = require('express').Router();

router.post('/api/v1/users/register', (req,res)=>{  
    res.send("hallo")
}); 
 
router.post('/api/v1/users/login', (req,res)=>{  
    res.send("hallo")
}); 
 
router.post('/api/v1/reflections', (req,res)=>{  
    res.send("hallo")
}); 
 
router.get('/api/v1/reflections', (req,res)=>{  
    res.send("hallo")
}); 
 
router.put('/api/v1/reflections/:id', (req,res)=>{  
    res.send("hallo")
}); 
 
router.delete('/api/v1/reflections/:id', (req,res)=>{  
    res.send("hallo")
});


module.exports = router;