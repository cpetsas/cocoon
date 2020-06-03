<h1>Cocoon test</h1>

<h2>Dependencies (Instructions for Ubuntu linux)</h2>

* System dependencies: Install nodejs, npm and Postgres by running
``` bash
sudo apt-get install nodejs
sudo apt-get install npm
sudo apt-get install postgresql
```
* Project dependencies: Install all npm dependendies with
``` bash
npm install
```

<h2>Database</h2>

* Working with Postgres:
    * Run
        ``` bash
        sudo su postgres
        ```
        to enter the postgres shell with admin privileges
    * Run
        ``` bash
        psql
        ```
    * Create a database called 'cocoon' (or whatever else you want, again make sure the env variables and config/config.json are updated)
        ``` bash
        create database cocoon;
        ```
    * Create a new user that has access to the new DB (https://www.postgresql.org/docs/8.0/sql-createuser.html) and make sure that the dev_env.sh script and the development object in config/config.json has the correct variables.
    * Connect to the DB with
        ```bash
        \c cocoon
        ```
    * Go back to the postgres shell, connect to the db and run 
        ```bash
        \dt
        ```
        to see the schema
<h2> Running the server </h2>

```bash
bash deploy/dev_env.sh
```

<h3> Notes </h3>
I used Nodejs and the express framework with sequelize as my ORM. The code syntax is very self explanatory, so I added soe comments on the just the structure of the requests



