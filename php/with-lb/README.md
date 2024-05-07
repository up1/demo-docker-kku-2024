## Demo scaling with Load balance
* PHP
* NGINX

### Step to run

Start php with 3 containers
```
docker compose build
docker compose up -d --scale php=3

docker compose ps
NAME            IMAGE        COMMAND                  SERVICE   CREATED          STATUS          PORTS
with-lb-lb-1    with-lb-lb   "/docker-entrypoint.…"   lb        38 seconds ago   Up 37 seconds   0.0.0.0:8888->80/tcp
with-lb-php-1   mydemo:2.0   "docker-php-entrypoi…"   php       38 seconds ago   Up 37 seconds   80/tcp
with-lb-php-2   mydemo:2.0   "docker-php-entrypoi…"   php       38 seconds ago   Up 37 seconds   80/tcp
with-lb-php-3   mydemo:2.0   "docker-php-entrypoi…"   php       38 seconds ago   Up 37 seconds   80/tcp
```

Access to http://localhost:8888/