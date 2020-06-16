# Simple Cassandra CRUD

## :rocket: Technologies

- [Docker](https://www.docker.com/)
- [Cassandra](https://cassandra.apache.org/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

## :gear: How to run

You will need a cassandra instance for databas. Docker is recomended.

Run in docker (if using): ```docker run --name cassandra -p 9042:9042 -d cassandra```

<b>Note</b>: every time when docker shutdowns, you will need to start the container again: ```docker start CONTAINER_ID```

#### Starting dependencies:

To install all dependencies: ```yarn```

To database setup: ```yarn run setup```

To run in development mode: ```yarn run dev```

## :memo: License

This project is under the MIT license. See the file [LICENSE](LICENSE) for more details.
