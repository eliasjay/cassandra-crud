const cassandra = require('../../shared/infra/cassandra');

class FindStoreService {
  async find() {
    const query = `SELECT * FROM market.store`;

    const queryResponse = await cassandra.execute(query);

    return queryResponse.rows;
  }

  async index(id) {
    const query = `SELECT * FROM market.store WHERE id='${id}' ALLOW FILTERING`;
    
    const queryResponse = await cassandra.execute(query);

    return queryResponse.rows;
  }
}

module.exports = FindStoreService;
