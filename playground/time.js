const moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date();
// console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);

// console.log(date.format('MMM Mo YYYY h:mm:ss a'));
console.log(date.format('h:mm a'));