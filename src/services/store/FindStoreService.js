const cassandra = require('../../infra/cassandra');

class FindStoreService {
  async find() {
    const query = `SELECT * FROM market.store`;
    let resQuery = '';

    await cassandra.execute(query, (result) => {
      resQuery = result;
    });

    return resQuery.rows;
  }

  async index(id) {
    const query = `SELECT * FROM market.store WHERE id=${id} ALLOW FILTERING`;
    let resQuery = '';

    await cassandra.execute(query, (result) => {
      resQuery = result;
    });

    return resQuery.rows;
  }
}

module.exports = FindStoreService;
