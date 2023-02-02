# nginx

## install

```bash
sudo apt update

sudo apt install nginx

or

deb https://nginx.org/packages/ubuntu/ focal nginx

deb-src https://nginx.org/packages/ubuntu/ focal nginx
```

## start the nginx service

```bash
sudo systemctl start nginx
```

## check service status

```bash
sudo system status nginx
```

## nginx configuration

> note: for safer side always write custom configuration in a separate file. Nginx provides the path for our custom config. Nginx will overwrite the config from custom file when service starts.

### default config path

 `/etc/nginx/nginx.conf`

### custom config folder path

 `etc/nginx/conf.d/`

 inside this path we can create our own config file. File name can be any with extension `.conf`

 `eg. etc/nginx/config.d/my-app-setting.conf`

### config structure

```text

server {
    # --- listening to port 80
    listen 80;
    
    # --- specify private & public ip, domain name
    server_name 192.168.1.105, 123.1.1.1;

    # --- specify root folder (all static applications can reside in it)
    root /home/Tony/Documents/test-nginx;
    
    
    location / {
      # --- let landing index.html call -> default-pages/index.html
      index index.html readme.html master.html;
    }
    
    # --- Java tomcat or Node server reverse proxy
    location /adb-dev-server/ {

      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;

      # --- url of server application with port
      proxy_pass http://localhost:3000/;
    }

 }
```

## verify or to check any syntax error in config file

```bash
nginx -t
```

## to test

go to browser and hit the ip address of the machine

`eg. http://192.168.1.105`
