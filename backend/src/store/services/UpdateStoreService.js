const cassandra = require('../../shared/infra/cassandra');

class UpdateStoreService {
  async update(id, name) {
    const query = `UPDATE market.store SET name='${name}' WHERE id='${id}'`;
    
    const queryResponse = await cassandra.execute(query);

    return queryResponse.rows;
  }
}

module.exports = UpdateStoreService;
