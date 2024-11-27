const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and return 5 when inputs are 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round and return 5 when inputs are 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round and return 6 when inputs are 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round negative numbers and return correct sum', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });

  it('should handle zero as input', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 3.4), 3);
  });

  it('should handle large numbers correctly', () => {
    assert.strictEqual(calculateNumber(1000.9, 2000.1), 3001);
  });
});

