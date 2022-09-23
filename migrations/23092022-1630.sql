create table users ( 
	id serial primary key, 
	email varchar, 
	Password VARCHAR
);

 create table reflections ( 
 	id serial primary key, 
	 success varchar, 
	 low_point varchar, 
	 take_away varchar, 
	 owner_id int, 
	 create_date TIMESTAMP, 
	 modified_date TIMESTAMP, 
	 CONSTRAINT fk_users 
	 	FOREIGN KEY(owner_id) 
	 REFERENCES users(id)
 );