# Bridging Hope

A information management system for non-profits, starting in the Putnam County, Tennessee Area. You can access the website at [bridginghope.life](https://bridginghope.life)


### AWS EC2 is used for running the website
- Login Information: Contact Seth Williams
- To connect to the EC2 Instance: 

    - ```ssh -i "{path/to/Eddie.pem}" ubuntu@{ip_of_ec2_instance}```
- Do not turn off the machine unless unchanging ip address has been implemented

### BlueHost is used for hosting the domain
- Login Information: Contact Seth Williams
- DNS records point to the EC2 instance
- If everything goes well, you shouldn't have to touch it

### Nginx is used as the webserver
- The files can be found in /etc/nginx
- The configuration files for bridginghope.life can be found in /etc/nginx/sites-available
- When changing the configuration file, run ```sudo nginx -t``` to test if the syntax is correct
- After testing if the syntax is correct, restart nginx using the following command:
    - ```sudo systemctl restart nginx```

### The website is running using Node's pm2 command to run the website in the background
- We did it this way, because we couldn't figure out how to run it as a daemon.
- To see the node apps running in the background, use the following command:
    - ```pm2 ls```
    - ```pm2 start/stop {process number}``` for starting/stopping
    - For more useful commands, go [here](https://pm2.keymetrics.io/docs/usage/quick-start/)

### To build the website, run:
- ```npm run build```
- To run the website in the background with pm2:
    - ```pm2 serve -s build```
    - ```pm2 ls``` shows the process running in the background if it worked

### After code has been pushed to the EC2 instance:
- Connect to the instance
- Go to ~/BridgingHope/frontend and run:
    - ```npm install```
    - ```pm2 stop 1```
    - ```npm run build```
    - ```pm2 start 1```
- Do the same for the backend folder, except change the process number in the pm2 commands


#### Contributors:
Colton Sellner, Zeppe Guzzi, Nathan Lamb, Edward Gannod
