## Working with Docker Swarm

### Step 1 :: Initial cluster
```
docker swarm init
```

### Step 2 :: Deploy with docker compose file
```
docker stack deploy --compose-file docker-compose-deploy.yml demo01
docker stack services demo01
docker service ls
```

Testing
```
curl http://localhost:5000/
```

### Step 3 :: Scaling
```
docker service scale demo01_web=5
```

Testing
```
curl http://localhost:5000/
```

### Step 4 :: Delete and leave from docker swarm mode
```
docker stack rm demo01
```

Leave from docker swarm mode
```
docker swarm leave --force
```

Demo