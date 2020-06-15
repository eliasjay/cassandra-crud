const CreateStoreService = require('../services/CreateStoreService');
const FindStoreService = require('../services/FindStoreService');
const UpdateStoreService = require('../services/UpdateStoreService');
const DeleteStoreService = require('../services/DeleteStoreService');

const createStore = new CreateStoreService();
const findStore = new FindStoreService();
const updateStore = new UpdateStoreService();
const deleteStore = new DeleteStoreService();

class StoreController {
  async create(request, response) {
    const { name } = request.body;
    const store = await createStore.create(name);

    return response.json({ store });
  }
  
  async index(request, response) {
    const { id } = request.params;
    const store = await findStore.index(id);

    return response.json({ store });
  }
  
  async show(request, response) {
    const store = await findStore.find();
    
    return response.json({ store });
  }
  
  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const store = await updateStore.update(id, name)
    
    return response.json({ store })
  }
  
  async destroy(request, response) {
    const { id } = request.params;

    const store = await deleteStore.destroy(id);

    return response.json({ store })
  }
}

module.exports = StoreController;
