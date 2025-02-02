# Node.js Deployment

> Steps to deploy a Node.js app to DigitalOcean using PM2, NGINX as a reverse proxy and an SSL from LetsEncrypt

## 1. Digital Ocean


## 2. Create a droplet and log in via ssh
  root user, or  new user

## 3. Install Node/NPM
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt install nodejs

node --version
```

## 4. Github 
```
git clone yourproject.git
```

### 5. Install dependencies and test app
```
cd  project
npm install
npm start (or whatever your start command)
# stop app
ctrl+C
```
## 6. Setup PM2 process manager to keep your app running
```
https://www.npmjs.com/package/pm2
https://pm2.keymetrics.io/
sudo npm i pm2 -g
pm2 start app.js  [[instead of node app.js]]

# Other pm2 commands
pm2 show app
pm2 status
pm2 restart app
pm2 stop app
pm2 logs (Show log stream)
pm2 flush (Clear logs)

# To make sure app starts when reboot
# auto-restart after reboot:
pm2 startup ubuntu 
or...
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup ubuntu -u ubuntu --hp /home/ubuntu
pm2 status
```
###  access app using your IP and port.  setup a firewall blocking that port and setup NGINX as a reverse proxy to access it directly using port 80 (http)

## 7. Setup ufw firewall
```
sudo ufw enable
sudo ufw status
sudo ufw allow ssh #(Port 22)
sudo ufw allow http #Port 80)
sudo ufw allow https #(Port 443)
```

## 8. Install NGINX and configure
```
sudo apt install nginx 
sudo nano /etc/nginx/sites-available/default
sudo nginx -t
sudo service nginx restart
```
Add the following to the location part of the server block
```
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```
```
# Check NGINX config
sudo nginx -t

# Restart NGINX
sudo service nginx restart
```

###  IP with no port (port 80)  

## 9. Add domain in Digital Ocean
In Digital Ocean, go to networking and add a domain

Add an A record for @ and for www to your droplet


## Register and/or setup domain from registrar
I prefer Namecheap for domains. Please use this affiliate link if you are going to use them
https://namecheap.pxf.io/c/1299552/386170/5618

Choose "Custom nameservers" and add these 3

* ns1.digitalocean.com
* ns2.digitalocean.com
* ns3.digitalocean.com
 
10. Add SSL with LetsEncrypt
```
sudo add-apt-repository ppa:certbot/certbot  #deprecated use==>
  curl -o- https://raw.githubusercontent.com/vinyll/certbot-install/master/install.sh | bash

sudo apt-get update
sudo apt-get install python-certbot-nginx
# sudo certbot --nginx -d hexstat.xyz -d www.hexstat.xyz
sudo certbot --nginx -d mavencrypto.xyz -d www.mavencrypto.xyz
# Only valid for 90 days, test the renewal process with
certbot renew --dry-run

sudo apt-get install python-certbot-apache
sudo certbot --apache -d mavencrypto.xyz -d www.mavencrypto.xyz
```
 



#### Load Balancer 
* localhost port 5000
* NGINX -Digital Ocean:  [134.122.15.249] 
          -https://hexstat.xyz
          -local: /home/ubuntu/nfs

* NGINX -AWS - [35.175.138.209]  
          * local: /home/thomas/apps/
          * bitcoinBuyer1-findersCalculators
          * https://cryptomaven.xyz https://cryptomaven.us 