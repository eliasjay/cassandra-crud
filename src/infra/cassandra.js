const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1'
});

client.connect(async err => {
  err
    ? console.error(err)
    : console.log('Cassandra connected.');
});

module.exports = client;