CREATE TABLE IF NOT EXISTS projects(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deliverydate date NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    projectId integer REFERENCES projects(id) 
);

INSERT INTO projects(name,priority,description, deliverydate)
    VALUES('Make a Web App',1,'create a web page whit React','2020-03-10');

INSERT INTO projects(name,priority,description, deliverydate)
    VALUES('App Mobile',2,'languaje Dark','2020-03-13');

INSERT INTO projects(name,priority,description, deliverydate)
    VALUES('Desktop App',3,'created whit C#','2020-03-15');

-- insert data task

INSERT INTO tasks(name,done,projectId)
    VALUES('dowload C#',false,9);

INSERT INTO tasks(name,done,projectId)
    VALUES('design UI',false,7);

INSERT INTO tasks(name,done,projectId)
    VALUES('use HOOK',false,7);

INSERT INTO tasks(name,done,projectId)
    VALUES('install emulator',false,8);