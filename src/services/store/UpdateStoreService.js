const cassandra = require('../../infra/cassandra');

class UpdateStoreService {
  async update(id, name) {
    const query = `UPDATE market.store SET name=${name} WHERE id=${id} ALLOW FILTERING`;
    let resQuery = '';

    await cassandra.execute(query, (result) => {
      resQuery = result;
    });

    return resQuery.rows;
  }
}

module.exports = UpdateStoreService;
