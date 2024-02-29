import characterCheck from '../index';
test.each([
    ['Mar', 90, 'healthy'],
    ['Mar', 45, 'wounded'],
    ['Mar', 10, 'critical'],
])('Character %s health %i check', (name, health, expected) => {
    const result = characterCheck(name, health);
    expect(result).toBe(expected);
});