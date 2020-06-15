const { uuid } = require('uuidv4');
const cassandra = require('../../shared/infra/cassandra');

class CreateStoreService {
  async create(name) {
    const store = {
      id: uuid(),
      name
    }

    const query = `INSERT INTO market.store (id, name) VALUES (${store.id}, ${store.name})`;
    let resQuery = '';

    await cassandra.execute(query, (result) => {
      resQuery = result;
    });

    return resQuery.rows;
  }
}

module.exports = CreateStoreService;
