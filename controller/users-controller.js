const users = require('./../models/users'); 
 

class UsersController { 
 
    static registerUser(req,res){ 
        users.findAllusers()
        .then((result) => { 
            res.render('data-mahasiswa', {mahasiswas : result});
        })
        .catch((err)=> { 
            res.render('error-page');
        })
    }   
     
    static loginUser(req,res){ 
        users.findAllusers()
        .then((result) => { 
            res.render('data-mahasiswa', {mahasiswas : result});
        })
        .catch((err)=> { 
            res.render('error-page');
        })
    }  
     
    static reflectionDataAdd(req,res){ 
        const {nama, tanggal_lahir, alamat, id_jurusan} = req.body; 
        users.addMahasiswa(nama, tanggal_lahir, alamat, id_jurusan) 
        .then(()=>{ 
            res.redirect('/mahasiswa');
        }) 
        .catch(()=>{ 
            res.render('server-error');
        })
    } 

    static reflectionDataById(req,res){ 
        const {id} = req.params 
        users.findMahasiswaById(id) 
        .then((result)=>{ 
            res.render('detail-mahasiswa', {mahasiswa : result});
        }) 
        .catch((err) => {   
            if (err.name === "userNotFound") return res.render('not-found');
            res.render('server-error');
        });
    } 
    
    static reflectionDataUpdate(req,res){ 
        const {id} = req.params;  
        const { nama, tanggal_lahir, alamat, id_jurusan} = req.body;   
        users.updateMahasiswa(id, nama, tanggal_lahir, alamat, id_jurusan) 
        .then(()=>{ 
            res.redirect('/mahasiswa', );
        }) 
        .catch(()=>{ 
            res.render('not-found');
        })
    }  
     
    static reflectionDataDelete(req,res){ 
        const {id} = req.params   
        mahasiswaM.deleteMahasiswa(id) 
        .then(()=>{ 
            res.redirect('/mahasiswa');
        })
        .catch(()=>{ 
            res.render('server-error');
        })
    } 

}  

 
module.exports = UsersController;