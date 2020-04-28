var chai = require('./node_modules/chai');
var mocha = require('./node_modules/mocha');
var assert = chai.assert;

require('./node_modules/jquery');
require('easy');

describe('EasyOnTheUIConsole', function() {
    it('created container element on the UI when on initialized', function() {
        assert.equal($('#newConsoleUI').length, 1);
    });
});