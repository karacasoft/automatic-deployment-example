
/**
 * DBManager abstract class
 * 
 * Abstract methods that should be implemented in subclasses
 * will throw an error.
 * 
 * @author KaracaSoft
 */
class DBManager {
    /**
     * Subclasses should implement this to save a value
     * on to a persistent (or volatile) storage.
     * 
     * @param {string} key key of the value stored
     * @param {any} value value that will be stored under given key
     */
    save(key, value) {
        throw new Error("Not Implemented");
    }

    /**
     * Subclasses should implement this to return a value
     * that is saved with the given key, or return undefined
     * when no such key exists.
     * 
     * @param {string} key key of the value that should be retrieved
     * @returns {any} value that is stored under the given key, or undefined
     *                if no such value exists
     */
    get(key) {
        throw new Error("Not Implemented");
    }
}

module.exports = {
    DBManager,
};