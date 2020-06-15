const cassandra = require('./cassandra');

async function createKeyspace() {
  try {
    await cassandra.execute(
      `create keyspace market with replication = {
        'class': 'SimpleStrategy',
        'replication_factor': 1
      }`
    );

    return 'Keyspace created with success';
  } catch (error) {
    throw new Error('Could not create Market Keyspace');
  }
}

async function createStoreTable() {
  try {
    await cassandra.execute(
      `create table market.store(
        id text primary key,
        name text
      );`
    );

    return 'Store table created with success'
  } catch (error) {
    throw new Error('Could not create Store Table');
  }
}

createKeyspace();
createStoreTable();
