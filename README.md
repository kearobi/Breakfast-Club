# Breakfast-Club
Full-stack project featuring React with FLUX and Express on the back-end, with special appearances by Flux and Postgres, cameos by ES6 and SCSS. @kearobi @rachelruderman @alextickle @Salvara4 @brazilgabe @cekeith. Check it out and come be a guest speaker at Breakfast Club!

// LOCAL INSTALLATION
----

- Start by cloning and entering the project repo:



git clone https://github.com/kearobi/Breakfast-Club.git


cd Breakfast-Club



- Once you've downloaded the project, install dependencies:



cd bc-express

npm install

cd ../bc-react

yarn install



 -You will need to create a config.json file in the bc-express/config directory, copy the contents of config.example.json into it,
and edit the username and password to match your local postgres account

// CREATE, FORMAT, AND SEED DATABASE
----


- Once signed into postgres with the postgres cli (psql -U username), enter the following command:



CREATE DATABASE "bc_development";



- Then navigate to the root of the bc-express directory and run the following sequelize commands:



sequelize db:migrate

sequelize db:seed:all



// LAUNCH APPLICATION
----

- To start the application you will need two terminal sessions. Navigate each to the root directory of the project. Use the first to start the express app:



cd bc-express

nodemon app.js



- Use the second terminal session to start the React app:



cd bc-react

yarn start



// REFORMAT AND RESEED DATABASE
----

- If you are already have a local bc_development database then login to postgres using the cli and run the following commands:



\c bc_development

DROP TABLE "Messages" CASCADE; DROP TABLE "Users" CASCADE; DROP TABLE "Bevents" CASCADE; DROP TABLE "Places" CASCADE; DROP TABLE "GuestLists" CASCADE; DELETE FROM "SequelizeMeta";



- Then quit postgres (\q) and run the two sequelize commands in the bc-express directory:



sequelize db:migrate

sequelize db:seed:all



- Now you may launch the application
