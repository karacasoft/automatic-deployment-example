const { InMemoryDbManager } = require("../dbmanager/inmemorydbmanager");
const { UserInfoManager } = require("./userinfomanager");


let userInfoManager;
let dbManager;

beforeEach(() => {
    dbManager = new InMemoryDbManager();
    dbManager.get = jest.fn();
    dbManager.save = jest.fn();

    userInfoManager = new UserInfoManager(dbManager);
});

test('when we store a user in the database and retrieve it back, it should be in userInfoManager.user', () => {
    const user = {
        name: 'Mahmut',
    };
    dbManager.get.mockReturnValue(user);

    userInfoManager.saveUserInfo();

    userInfoManager.loadUserInfo();

    expect(userInfoManager.user).toBe(user);
    expect(dbManager.get).toHaveBeenCalledTimes(1);

    expect(dbManager.save).toHaveBeenCalledTimes(1);
});

