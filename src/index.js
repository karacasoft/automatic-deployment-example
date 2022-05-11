const { InMemoryDbManager } = require("./dbmanager/inmemorydbmanager");
const { UserInfoManager } = require("./userinfomanager/userinfomanager");

userInformation = {
    name: "Mahmut",
    surname: "Karaca",
    department: "CMPE",
    studentNumber: "2019700999",
};

const inMemoryDbManager = new InMemoryDbManager();

const userInfoManager = new UserInfoManager(inMemoryDbManager);

userInfoManager.user = userInformation;

userInfoManager.saveUserInfo();

userInfoManager.user = undefined;

userInfoManager.loadUserInfo();

console.log("User Info Loaded:");
console.log(userInfoManager.user);

console.log("For Comparison:");
console.log(userInformation);