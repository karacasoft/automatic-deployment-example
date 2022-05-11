const { DBManager } = require("./dbmanager");


describe('DBManager abstract class', () => {
    let dbManager;

    beforeEach(() => {
        dbManager = new DBManager();
    });

    describe('#save', () => {
        it('should throw an error', async () => {
            expect(() => {
                dbManager.save('key', 'value');
            }).toThrow();
        });
    });

    describe('#get', () => {
        it('should throw an error', async () => {
            expect(() => {
                dbManager.get('key');
            }).toThrow();
        });
    });
});