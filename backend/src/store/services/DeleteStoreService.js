const cassandra = require('../../shared/infra/cassandra');

class DeleteStoreService {
  async destroy(id) {
    const query = `DELETE FROM market.store WHERE id='${id}'`;
    
    const queryResponse = await cassandra.execute(query);

    return queryResponse.rows;
  }
}

module.exports = DeleteStoreService;
