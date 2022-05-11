const { DBManager } = require('./dbmanager');

class InMemoryDbManager extends DBManager {

    /*private*/ _db = {};

    save(key, value) {
        this._db[key] = value;
    }

    get(key) {
        return this._db[key];
    }
}

module.exports = {
    InMemoryDbManager,
};