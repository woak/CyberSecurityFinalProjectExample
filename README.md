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

-------------------------------------------------------------------------------
Deliverable
-------------------------------------------------------------------------------
https://github.com/woak/CyberSecurityFinalProjectExample

This deliverable demonstrates why SQL injection is still a problem as, even using modern frameworks such as NodeJS and PostgreSQL, today’s web application servers and databases are still vulnerable. Unfortunately, the impetus to prevent injection attacks falls completely on the shoulders of the developer as described by Sarah Gibson in her 2017 talk. It is impossible, even for modern systems, to prevent SQL injection if the developer fails to defend against such attacks. I’ve also attached a Veracode static scan of the above codebase. As one can see, on pages 6-7 of the attached report the scan recommends a fix to a SQL injection vulnerability, even giving the file and line number (server.js:36). This, I think, demonstrates beautifully the action items determined by Sarah Gibson in her talk and David Strom in his article. Allowing for post-production analysis of my deliverable application would have shown me, the developer, the massive SQL injection vulnerability I had introduced into my application server, and even gives me recommendations on how I might fix it.
