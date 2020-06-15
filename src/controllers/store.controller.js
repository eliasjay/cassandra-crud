const CreateStoreService = require('../services/store/CreateStoreService');
const FindStoreService = require('../services/store/FindStoreService');
const UpdateStoreService = require('../services/store/UpdateStoreService');
const DeleteStoreService = require('../services/store/DeleteStoreService');

const createStore = new CreateStoreService();
const findStore = new FindStoreService();
const updateStore = new UpdateStoreService();
const deleteStore = new DeleteStoreService();

class StoreController {
  async create(request, response) { 
    return response.json({
      message: 'store created'
    })
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
    return response.json({
      message: 'store updated'
    })
  }
  
  async destroy(request, response) {
    return response.json({
      message: 'store deleted'
    })
  }
}

module.exports = StoreController;
