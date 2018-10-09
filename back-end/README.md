
1. Things to be prepared in advance:
Heroku account 
Node.js and npm https://nodejs.org/en/download/
Git https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Heroku Command Line Interface  
$brew install heroku/brew/heroku


2.Log in using the email address and password
$heroku login


3. Download the example
$git clone https://github.com/chenwangnida/node-js-getting-started.git
$cd node-js-getting-started

4.Let Heroku to receive your source code,  and a git remote is also created and associated with your local git repository
$heroku create  nwen304


5.deploy your code, and ensure one dyno is aligned to your app
$git push heroku master
$heroku ps:scale web=1
$heroku open 

6.view logs
$heroku logs --tail

7.how many dynos are running using
$heroku ps

8.download all the dependecy and test locally 
$npm install
$heroku local web

9.list add-ons for your app like so:
$heroku addons


Add-ons are third-party cloud services that provide out-of-the-box additional services for your application

10.add a free Heroku Postgres Starter Tier dev database to your app.
$heroku addons:create heroku-postgresql:hobby-dev
This creates a database, and sets a DATABASE_URL environment variable (you can check by running heroku config).
see more detains in https://devcenter.heroku.com/articles/heroku-postgresql


11. Connect in  NodeJS. Use npm to install the pg module to your dependencies:
$npm install pg


12. connect to the remote database, create a table and insert a row 
We have to install Postgres locally first https://devcenter.heroku.com/articles/heroku-postgresql#set-up-postgres-on-mac

$heroku pg:psql
=> create table test_table (id integer, name text);
=> insert into test_table values (1, 'hello database');



14.Now deploy. Almost every deploy to Heroku follows this same pattern. First, add the modified files to the local git repository:
$ git add .
Now commit the changes to the repository:
$ git commit -m "my comments"
Now deploy, just as you did previously:
$ git push heroku master
Finally, check that everything is working:
$ heroku open
