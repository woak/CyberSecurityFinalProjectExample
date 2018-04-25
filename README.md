Author: Teddy Laurita
Date Created: 4/25/18
An example app to illustrate the dangers of SQL injection!
-------------------------------------------------------------------------------
Node v8.11.1
See package-lock.json->dependencies for node modules

Setup: Fill out host, username, password, database, and port value in .env file 

Execution instructions:
    RUN APP SERVER: node server.js
    ACCESS WEBPAGE: 127.0.0.1:8080 in a web browser
    SEED DATABASE:  psql -U [username] -d [password] < seedDB.sql

SQL Injection Instructions:
    To illustrate the dangers of SQL injection, follow the above execution
instructions and enter the following string into the form box:
    ' or '1' = '1
As you can see the following query to this app (a harmless password checking app)
will reveal all the user's passwords!!