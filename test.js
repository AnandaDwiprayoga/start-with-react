const moment = require("moment");

console.log(moment(new Date()).format('YYYY-MM-DD'));
console.log(moment(new Date()).subtract(1, "year").format('YYYY-MM-DD'));
console.log(moment(new Date()).add(1, "year").format('YYYY-MM-DD'));

