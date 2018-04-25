CREATE TABLE IF NOT EXISTS users (
    username VARCHAR NOT NULL PRIMARY KEY,
    password VARCHAR NOT NULL

);

INSERT INTO users VALUES 
    ('gandalf', 'aaa'),
    ('frodo', 'bbb'),
    ('sam', 'ccc'),
    ('merry', 'ddd'),
    ('pippin', 'eee');