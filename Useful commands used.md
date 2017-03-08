# Build the image getznode from the current path
docker build -t getznode .

# Run the image and use the port 3500 from the exposed port 3000 for the image getznode
docker run -it -p 3500:3000 getznode

# Remove the image
docker rmi <image>

# Remove the container
docker rm <container>



## Using Docker Compose
# Docker compose bringing up the containers using multiple yml files
```
docker-compose -f docker-compose.yml -f ./dbDocker/docker-compose.yml up
```

# Docker execute the scripts in mongo shell
```
docker exec my-mongo mongo local dbSetup.js
```

## MongoDB Shell commands used.
`use local`

`db.runCommand( { create: "TodoList", capped: true, size: 64 * 1024 } )`

`show collections`

`db.runCommand({insert:"TodoList", documents:[{itemId:1,item:"Gethyl First ToDo in Container", completed:false}]})`

`db.TodoList.find()`





