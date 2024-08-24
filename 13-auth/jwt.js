const jwt = require('jsonwebtoken');

let id = '100';
const secret = 'supersecret';

const token = jwt.sign(id,secret);
const decodeToken = jwt.verify(token,secret);

console.log(token);
console.log(decodeToken);