CREATE TABLE hobbies(
   hobby_id serial PRIMARY KEY,
   hobby VARCHAR (255) NOT NULL,
   years FLOAT(8) NOT NULL
);

insert into hobbies(hobby, years) values('swimming', 8.0);
insert into hobbies(hobby, years) values('diving', 5.0);
insert into hobbies(hobby, years) values('jogging', 4.0);
insert into hobbies(hobby, years) values('dancing', 2.75);
insert into hobbies(hobby, years) values('cooking', 5.0);
insert into hobbies(hobby, years) values('swimming', 4.5);
insert into hobbies(hobby, years) values('diving', 1.25);
insert into hobbies(hobby, years) values('jogging', 1.5);