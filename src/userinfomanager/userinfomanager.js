
/**
 * Module that uses a DBManager to save and load user information
 * from a database, ...for some reason.
 * 
 * @author KaracaSoft
 */
class UserInfoManager {
    /*private*/ _dbManager;
    user;

    constructor(dbManager) {
        this._dbManager = dbManager;
    }

    /**
     * Saves the class field user into the database
     */
    saveUserInfo() {
        
    }

    /**
     * Loads the user information stored in the database to the
     * class field user
     */
    loadUserInfo() {

    }
}

module.exports = {
    UserInfoManager,
};