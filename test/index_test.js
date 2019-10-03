let assert = require('assert');
let index = require('../index.js')

describe('index.js', function() {
    describe('#foo()', function() {
        it('should return "bar"', function() {
            assert.equal(index.foo(), "bar");
        });
    });
});