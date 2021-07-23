
# nodejs-gender-recognition-game


The application displays a first name
the user must find the gender (male / female) until he won or lose (score).


## Installation

Install nodejs-gender-recognition-game
 with npm

```bash
# Clone this repo to your local machine using
git clone https://github.com/sofientr/nodejs-gender-recognition-game.git


# Get into the directory
cd nodejs-gender-recognition-game


# Coppy .env-example and create your own .env file
cp .env-example .env

# Edit .env file and add your mysql username, mysql password , db name and apikey https://gender-api.com/ 
vi .env

# Get into the db directory
cd db

# Import mysql database using Command line
mysql -u [db_username] -p[db_password] < names-db.sql
# you can edit the file if you want to change the db_name
# if you are using a different db_name and it elready exists,
# you can comment the first two lines, remain the line => USE technical_test;
# and just change the db_name

# Install dependencies
cd ..
npm install

#Start Express.js app at http://localhost:3006/:
npm start

```
    
## Demo
![](capture.gif)


  