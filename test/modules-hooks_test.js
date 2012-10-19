var hooks = require('../lib/modules-hooks.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['hooks'] = {
    setUp: function(done) {
        var that = this;

        that.result = false;

        hooks.on('test', function(data, callback) {
            that.result = data;
            callback(data);
        });

        done();
    },

    'invoke': function(test) {
        var that = this;

        test.expect(2);

        test.equal(that.result, false, 'false before the hook');

        hooks.invoke('test', true, function(data) {
            test.equal(that.result, true, 'true after the hook');

            test.done();
        });
    }
};
