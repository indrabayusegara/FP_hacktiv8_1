create table users ( 
	id serial primary key, 
	email varchar NOT NULL, 
	Password VARCHAR NOT NULL
);

 create table reflections ( 
 	id serial primary key, 
	success varchar NOT NULL, 
	low_point varchar NOT NULL, 
	take_away varchar NOT NULL, 
	owner_id int NOT NULL, 
	created_date TIMESTAMP, 
	modified_date TIMESTAMP, 
	CONSTRAINT fk_users 
		FOREIGN KEY(owner_id) 
	 REFERENCES users(id)
 );