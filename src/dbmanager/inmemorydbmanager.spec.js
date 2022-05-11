const { InMemoryDbManager } = require('./inmemorydbmanager');

let dbManager;

beforeEach(() => {
    dbManager = new InMemoryDbManager();
});

test('should save successfully', () => {
    dbManager.save('key', 'value');
});

test('should save a value under a key and retrieve the element with the same key', () => {
    dbManager.save('key', 'value');

    const value = dbManager.get('key');

    expect(value).toBe('value');
});

test('when we try to get an non-existent key, return undefined', () => {
    const value = dbManager.get('non-existent');

    expect(value).toBeUndefined();
});