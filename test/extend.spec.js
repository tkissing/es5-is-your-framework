define(function(require, exports, module) {
    var assert = require('chai').assert;

    var extend = require('lib/extend');

    describe('extend', function() {
        it('should assign properties of a source object to the destination object', function() {
            assert.deepEqual(extend({ 'a': 1 }, { 'b': 2 }), { 'a': 1, 'b': 2 });
        });

        it('should assign own source properties', function() {
            function Foo() {
                this.a = 1;
                this.c = 3;
            }
            Foo.prototype.b = 2;
            assert.deepEqual(extend({}, new Foo), { 'a': 1, 'c': 3 });
        });

        it('should accept multiple source objects', function() {
            var expected = { 'a': 1, 'b': 2, 'c': 3 };
            assert.deepEqual(extend({ 'a': 1 }, { 'b': 2 }, { 'c': 3 }), expected);
            assert.deepEqual(extend({ 'a': 1 }, { 'b': 2, 'c': 2 }, { 'c': 3 }), expected);
        });

        it('should overwrite source properties', function() {
            var expected = { 'a': 3, 'b': 2, 'c': 1 };
            assert.deepEqual(extend({ 'a': 1, 'b': 2 }, expected), expected);
        });

        it('should assign source properties with `null` and `undefined` values', function() {
            var expected = { 'a': null, 'b': undefined, 'c': null };
            assert.deepEqual(extend({ 'a': 1, 'b': 2 }, expected), expected);
        });

        it('should handle empty objects as sources', function() {
            var expected = {a: 1, b: 2};
            assert.deepEqual(extend(expected, {}), expected);
        });
    });
});
