const cassandra = require('../../shared/infra/cassandra');

class DeleteStoreService {
  async destroy(id) {
    const query = `DELETE FROM market.store WHERE id=${id} ALLOW FILTERING`;
    let resQuery = '';

    await cassandra.execute(query, (result) => {
      resQuery = result;
    });

    return resQuery.rows;
  }
}

module.exports = DeleteStoreService;
