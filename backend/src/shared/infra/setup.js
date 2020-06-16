const cassandra = require('./cassandra');

async function createKeyspace() {
  try {
    await cassandra.execute(
      `create keyspace if not exists market with replication = {
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
      `create table if not exists market.store(
        id text,
        name text,
        PRIMARY KEY(id)
      );`
    );

    return 'Store table created with success'
  } catch (error) {
    throw new Error('Could not create Store Table');
  }
}

createKeyspace();
createStoreTable();
