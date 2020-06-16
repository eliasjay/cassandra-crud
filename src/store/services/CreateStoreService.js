const { uuid } = require('uuidv4');
const cassandra = require('../../shared/infra/cassandra');

class CreateStoreService {
  async create(name) {
    const query = `INSERT INTO market.store ("id", "name") VALUES ('${uuid()}', '${name}')`;

    const queryResponse = await cassandra.execute(query);

    return queryResponse;
  }
}

module.exports = CreateStoreService;
