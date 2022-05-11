const { DBManager } = require('./dbmanager');

class InMemoryDbManager extends DBManager {

    save(key, value) {

    }

    get(key) {
        
    }
}

module.exports = {
    InMemoryDbManager,
};