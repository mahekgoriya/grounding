var mymodule=require('./mymodule2.js');
var name=require('./mymodule3.js');
var detail=require('./mymodule4.js');

mymodule.info('Hello');
mymodule.warn('Hello');
mymodule.error('Hello');

console.log(name);
console.log(detail.mobile);
console.log(detail.email)