const cassandra = require('../../infra/cassandra');

class FindStoreService {
  async find() {
    const query = `SELECT * FROM market.store`;

    await cassandra.execute(query, (result) => {
      return result;
    });
  }

  async index(id) {
    const query = `SELECT * FROM market.store WHERE id=${id} ALLOW FILTERING`;

    await cassandra.execute(query, (result) => {
      return result;
    })
  }
}

module.exports = FindStoreService;
