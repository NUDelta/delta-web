module.exports = {
  servers: {
    one: {
      host: '45.55.190.249',
      username: 'root',
      pem: '~/.ssh/id_rsa'
    }
  },

  app: {
    name: 'delta',
    path: '../',
    docker: {
      image: 'kadirahq/meteord',
    },

    servers: {
      one: {},
    },

    env: {
      ROOT_URL: 'http://delta.northwestern.edu',
      PORT: 80,
      MONGO_URL: 'mongodb://admin:8Ph6zyzjYQg2UhfC@delta-web-shard-00-00.bzhkx.mongodb.net:27017,delta-web-shard-00-01.bzhkx.mongodb.net:27017,delta-web-shard-00-02.bzhkx.mongodb.net:27017/delta-web?ssl=true&replicaSet=atlas-y1zitz-shard-0&authSource=admin&retryWrites=true&w=majority'
    },

    enableUploadProgressBar: true
  }
};
