# Bridging Hope

A information management system for non-profits, starting in the Putnam County, Tennessee Area. You can access the website at [bridginghope.life](https://bridginghope.life)

## Guides

### Server

#### AWS EC2 is used for running the website
- Login Information: Contact Seth Williams
- To connect to the EC2 Instance: 

    - ```ssh -i "{path/to/Eddie.pem}" ubuntu@{ip_of_ec2_instance}```
    - The Eddie.pem file can be found in the files in the Microsoft Teams Briding Hope Teams group under files.
- The machine has a static IP, so you will be fine to turn it off whenever needed.

#### BlueHost is used for hosting the domain
- Login Information: Contact Seth Williams
- DNS records point to the EC2 instance
- If everything goes well, you shouldn't have to touch it

#### Nginx is used as the webserver
- The files can be found in /etc/nginx
- The configuration files for bridginghope.life can be found in /etc/nginx/sites-available
- When changing the configuration file, run ```sudo nginx -t``` to test if the syntax is correct
- After testing if the syntax is correct, restart nginx using the following command:
    - ```sudo systemctl restart nginx```
- If you need help working with nginx, contact Mr. Burchfield

#### The website is running using Node's pm2 command to run the website in the background
- We did it this way, because we couldn't figure out how to run it as a daemon.
- To see the node apps running in the background, use the following command:
    - ```pm2 ls```
    - ```pm2 start/stop {process number or name}``` for starting/stopping
    - For more useful commands, go [here](https://pm2.keymetrics.io/docs/usage/quick-start/)

#### To build the website, run:
- ```npm run build```
- To run the website in the background with pm2:
    - There are bashscript files that simply run the command needed to run either the front end or backend.
    - ```pm2 start run.sh --name {frontend or backend}```
    - ```pm2 ls``` shows the process running in the background if it worked
    - If the processes are already running, simply do:
        - ```pm2 restart {frontend or backend}``` 

#### After code has been pushed to the EC2 instance:
- Connect to the instance
- Go to ~/BridgingHope/frontend and run:
    - ```pm2 stop {frontend or backend}```
    - ```npm install```
    - If doing for frontend:
        - ```npm run build```
    - ```pm2 restart {frontend or backend}```

### Frontend

#### To test the frontend on your machine:

- Download [Node.js](https://nodejs.org)

- Then type the following commands in your terminal:
1. ```cd frontend```
2. if you have not downloaded the node packages yet: ```npm install```
3. ```npm start```

- type ```localhost:3000``` into the search bar of any web browser

- For more commands and information, see the [frontend README](frontend/README.md)

#### Google Maps

Note: Once we have the create organization functionality, we will not have to manually add locations to the map

See the [react-google-maps](https://visgl.github.io/react-google-maps/) documentation for more help and examples

### Backend

#### To test backend on local machine:
- Fill in your IP in the url in both signin.js and register.js files in the frontend
  - EX: 'http://100.200.55.55:8000/register'
- In CMD or VSCode console change directory to the .\backend\ file
- Make sure all dependencies are installed 
    - ```npm install```
- Run ```node --env-file=.env app.js```
    - If done right, you should get the message "Express listening at http://0.0.0.0:8000" in your console
    - Also, console messages will show up here as well

### Database
You must download [MariaDB](https://mariadb.org/download) to test the database on your machine.
See [database_tables.md](database_tables.md) for the commands to set up the database on your machine.
Also, [This site](https://www.mariadbtutorial.com/mariadb-basics/) is a good cheat sheet for MariaDB commands.

### .env Files
A .env file is basically a file to store sensitive infromation such as passwords or API keys. Currently, the Bridging Hope project has two .env files, on in the frontend directory and one in the backend directory. You will have to manually create the files on your machine since they are not pushed to GitHub for security reasons. Note: the .env files are not in any sub-directories - they are on the same level as the package.json files.

The .env file in the backend directory should look like:
```
#change this to the password you made when setting up MariaDB
DATABASE_PASSWORD=myPassword
```

The .env file in the frontend directory should look like:
```
# change this to your local IP address and database port when testing on your local machine
REACT_APP_URL=http://192.1.2.3:4433

# Google maps API key
REACT_APP_GOOGLE_MAPS_API_KEY=insertKeyHere
```

## Contributors

- [Taha Aktan](https://github.com/qweaksy)
- [Benjamin Burchfield](https://github.com/ttu-bburchfield)
- [Edward Gannod](https://github.com/egannod)
- [Zeppe Guzzi](https://github.com/zepz001)
- [Nathan Lamb](https://github.com/njlamb)
- [Zaire Mattox](https://github.com/ZaireM)
- [Colton Sellner](https://github.com/casellner)
- [Aidan Whitman](https://github.com/Whitman2003)
- [Shawn Wolford](https://github.com/swolford0408)
