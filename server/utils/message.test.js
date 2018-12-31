var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Bob'
        var url = 'https://www.google.com/maps?q=15,19';
        var locationMessage = generateLocationMessage(from, 15, 19)
        expect(locationMessage.createdAt).toExist().toBeA('number');
        expect(locationMessage).toInclude({from, url});
    });
})