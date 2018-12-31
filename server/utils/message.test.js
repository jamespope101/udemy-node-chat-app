var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = generateMessage('Bob', 'Hi');
        expect(message).toInclude({
            from: 'Bob',
            text: 'Hi'
        });
        expect(message.createdAt).toExist().toBeA('number');
    });
});