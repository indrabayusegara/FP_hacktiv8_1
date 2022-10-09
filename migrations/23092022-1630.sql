CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table users ( 
	id uuid default uuid_generate_v4() primary key, 
	email varchar, 
	password VARCHAR,
);

 create table reflections ( 
 	id uuid default uuid_generate_v4() primary key, 
	success varchar, 
	low_point varchar, 
	take_away varchar, 
	owner_id uuid default uuid_generate_v4(), 
	created_date TIMESTAMP, 
	modified_date TIMESTAMP, 
	CONSTRAINT fk_users 
		FOREIGN KEY(owner_id) 
	 REFERENCES users(id)
 );