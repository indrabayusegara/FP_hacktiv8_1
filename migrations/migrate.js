if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const pool = require('../config/config');

pool.query(`
create table users ( 
	id serial primary key, 
	email varchar, 
	Password VARCHAR
);
`, (err, res) => {
    if (err) throw 'cannot create users';
    pool.query(`
    create table reflections ( 
        id serial primary key, 
        success varchar, 
        low_point varchar, 
        take_away varchar, 
        owner_id int, 
        create_date TIMESTAMP, 
        modified_date TIMESTAMP, 
        constraint fk_users 
            foreign key(owner_id) 
            references users(id)
    );
    `, (err, res) => {
        if (err) throw 'cannot create users';
        console.log('migrations sukses');
    });
});