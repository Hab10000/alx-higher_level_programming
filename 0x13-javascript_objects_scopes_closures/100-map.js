#!/usr/bin/node
exports.list = [1, 2, 3, 4, 5];
#!/usr/bin/node
const Mylist = require('./100-data.js').list;
const NewList = Mylist.map((x, y) => x * y);
console.log(Mylist);
#!/usr/bin/node
const Mylist = require('./100-data.js').list;
const NewList = Mylist.map((x, y) => x * y);
console.log(Mylist);
console.log(NewList);
