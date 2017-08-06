# Breakfast-Club
Full-stack project featuring React with FLUX and Express on the back-end, with special appearances by Flux and Postgres, cameos by ES6 and SCSS. @kearobi @rachelruderman @alextickle @Salvara4 @brazilgabe @cekeith. Check it out and come be a guest speaker at Breakfast Club! Deployed to [Heroku](https://breakfast-club.herokuapp.com/)

### Local Installation
---
Start by cloning and entering the project repo:

```
git clone https://github.com/kearobi/Breakfast-Club.git
cd Breakfast-Club
```

Once you've downloaded the project, install dependencies:

```
cd bc-express
npm install
cd ../bc-react
yarn install
```

You will then need to create a config.json file in the bc-express/config directory, copy the contents of config.example.json into it,
and edit the username and password to match your local postgres account

### Create, Format, and Seed Database
---

Once signed into postgres with the postgres cli (psql -U username), enter the following command:

```
CREATE DATABASE "bc_development";
```

Then navigate to the root of the bc-express directory and run the following sequelize commands:

```
sequelize db:migrate
sequelize db:seed:all
```


### Launch Application
---

1. To start the application you will need two terminal sessions. Navigate each to the root directory of the project. Use the first to start the express app:

```
cd bc-express
nodemon app.js
```


2. Use the second terminal session to start the React app:

```
cd bc-react
yarn start
```


### Reformat and Reseed Database
---

 If you already have a local bc_development database then login to postgres using the cli and run the following commands:

```
\c bc_development
DROP TABLE "Messages" CASCADE; DROP TABLE "Users" CASCADE; DROP TABLE "Bevents" CASCADE; DROP TABLE "Places" CASCADE; DROP TABLE "GuestLists" CASCADE; DELETE FROM "SequelizeMeta";
```

Then quit postgres (\q) and run the two sequelize commands in the bc-express directory:

```
sequelize db:migrate
sequelize db:seed:all
```


### Clear your Local Storage
---
If you already had a local bc_development database and just dropped/repopulated your tables, make sure to also clear your browser's local storage as follows:

This can be done in two ways:
a) if you are logged into the app, simply log out
b) From your browser console, go to Application -> Local Storage -> http://localhost:3000 and delete all

Now you may launch the application


### Using Gource to Visual the Commit History

[download](http://gource.io/)

[documentation](https://github.com/acaudwell/Gource)

To visualize the commit history in this project:
1. Download gource
2. Open  Git CMD terminal
3. In the terminal, enter:

```
gource --user-image-dir ./bc-react/public/Team --start-date "2017-06-02"
```

### Postman
API is fully documented in Postman and ready for testing in both dev and prod environments. Use breakfastclub.sd@gmail.com login to update.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/e68eba690b78729afee8)

### Automated Testing
##### API
To test all API requests on dev or prod run one of the following scripts from the root directory. Most tests are fairly basic and just check for 200 responses. If you update the tests in Postman then please export the collection runner as a json and save it into postman folder so that the scripts run updated tests.

```
npm run test-api-dev
npm run test-api-prod
```

##### React Client
Components can be tested via jest with the following script:
```
npm run test-components
```
Alternatively you can globally install the jest cli (```npm install -g jest-cli```) and the ```jest``` command will run all ```.test.js``` files from any directory

Enjoy :)
