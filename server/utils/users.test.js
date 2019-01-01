const expect = require('expect');

const {Users} = require('./users');

describe('users', () => {

    var users;
    
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'James',
            room: 'Room Name'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userToRemove = {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }
        var user = users.removeUser('2');
        expect(user).toEqual(userToRemove);
        expect(users.users).toNotContain(userToRemove);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var user = users.removeUser('404');
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should get a user', () => {
        var user = users.getUser('2');
        expect(user).toEqual(users.users[1]);
    });

    it ('should not find user', () => {
        expect(users.getUser('404')).toNotExist();
    });

    it('should get all users for a room', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Julie']);
    });
});